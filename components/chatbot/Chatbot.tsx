
'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    if (isOpen && !chatId) {
      const newChatId = `chat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      setChatId(newChatId);
    } else if (!isOpen) {
      // Reset chat when closed
      setMessages([]);
      setChatId(null);
    }
  }, [isOpen, chatId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input, chatId }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the bot.');
      }

      const data = await response.json();
      
      const botMessage: Message = { id: Date.now().toString() + 'bot', text: data.answer, sender: 'bot' };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = { id: Date.now().toString() + 'error', text: 'Sorry, something went wrong. Please try again.', sender: 'bot' };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <Button onClick={() => setIsOpen(!isOpen)} size="icon" className="rounded-full w-14 h-14 shadow-lg">
          {isOpen ? <X /> : <MessageSquare />}
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-24 left-6 z-50 w-full max-w-sm h-[60vh] flex flex-col shadow-2xl rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
            <CardTitle className="text-lg font-headline flex items-center gap-2"><Bot /> AIM Foundation Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex items-start gap-2.5 ${message.sender === 'user' ? 'justify-end' : ''}`}>
                {message.sender === 'bot' && <div className="p-2 rounded-full bg-muted"><Bot className="w-5 h-5 text-primary"/></div>}
                <div className={`p-3 rounded-lg max-w-[80%] ${message.sender === 'user' ? 'bg-accent text-accent-foreground rounded-br-none' : 'bg-muted text-muted-foreground rounded-bl-none'}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                 {message.sender === 'user' && <div className="p-2 rounded-full bg-accent text-accent-foreground"><User className="w-5 h-5"/></div>}
              </div>
            ))}
             {loading && (
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-full bg-muted"><Bot className="w-5 h-5 text-primary"/></div>
                <div className="p-3 rounded-lg bg-muted text-muted-foreground rounded-bl-none">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>
          <CardFooter className="p-4 border-t">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                autoComplete="off"
                disabled={loading}
              />
              <Button type="submit" size="icon" disabled={loading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
