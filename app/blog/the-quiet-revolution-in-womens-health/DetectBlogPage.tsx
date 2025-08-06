
'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope } from 'lucide-react';

export default function DetectBlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <article>
          <header className="relative w-full h-[580px]">
            <Image
              src="https://placehold.co/1920x580.png"
              alt="Rural women attending a health awareness session"
              fill
              objectFit="cover"
              className="brightness-50"
              data-ai-hint="women health rural"
              priority
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-8 md:p-16">
              <div className="container mx-auto px-4 md:px-6 text-white">
                <Badge variant="secondary" className="mb-4">Blog Post</Badge>
                <h1 className="text-4xl md:text-5xl font-bold font-headline animate-fade-in-down [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                  The Quiet Revolution in Women’s Health
                </h1>
              </div>
            </div>
          </header>

          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg lg:prose-xl max-w-none text-muted-foreground text-justify space-y-6">
                <p>
                  In the quiet corners of rural India, where women silently shoulder the burdens of family, fields, and society, an invisible danger lurks—cervical cancer. It’s a disease that whispers before it strikes, often going unnoticed until it’s too late. And for millions of rural women who have never visited a gynaecologist, the danger grows every day.
                </p>
                <p>
                  But what if this silent killer could be caught early? What if one screening, one conversation, or one awareness session could save her life? This is the heartbeat of <strong>Project Detect</strong>—an initiative by AIM Foundation that’s reaching women before cancer does. By bringing critical screening services and reproductive health education to underserved regions, Detect is doing what was once unthinkable: <strong>catching cancer before it catches her.</strong>
                </p>

                <h2 className="text-3xl font-bold font-headline text-foreground">The Unseen Threat: Cervical Cancer in Rural India</h2>
                <p>
                  Cervical cancer is one of the most preventable cancers. Yet, it is also one of the deadliest for Indian women, especially in rural areas. According to the World Health Organization, India accounts for nearly one-third of global cervical cancer deaths.
                </p>
                <p>Why? The answer lies in a tragic mix of:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Lack of awareness about reproductive health</li>
                  <li>Deep-rooted cultural stigma around gynaecological care</li>
                  <li>Limited or no access to female doctors or screening facilities</li>
                  <li>Fear, shame, and misinformation</li>
                </ul>
                <p>In rural India, a woman might ignore bleeding, discharge, or pain for months—sometimes years—before seeking help. And by then, it’s often too late. That’s where Detect steps in.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">A Lifeline in the Villages: What Project Detect Does</h2>
                <p>
                    Project Detect is not just a campaign. It’s a life-saving mission. Implemented in partnership with the Chittaranjan National Cancer Institute (CNCI) and supported by the Government of West Bengal, the program brings vital health services to the last mile. Here’s how Detect works:
                </p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">🩺 Community-Based Screening Camps</h3>
                <p>Mobile health teams travel to villages, organizing free cervical cancer screening camps for women aged 30 and above. Many of these women have never had a pelvic exam. Detect gives them access—without judgment, without cost.</p>
                
                <h3 className="text-2xl font-semibold font-headline text-foreground">📚 Awareness & Education Sessions</h3>
                <p>Before screenings, the team conducts interactive sessions on:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>What cervical cancer is</li>
                  <li>Symptoms to watch for</li>
                  <li>Menstrual hygiene</li>
                  <li>HPV infection and prevention</li>
                  <li>The importance of regular check-ups</li>
                </ul>
                <p>These sessions use local language, real-life stories, and visual aids to make the information relatable and memorable.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">🧕🏽 Training ASHA & Anganwadi Workers</h3>
                <p>Detect trains frontline health workers—ASHA and Anganwadi staff—to:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Identify early warning signs</li>
                  <li>Counsel women in their communities</li>
                  <li>Refer suspected cases</li>
                  <li>Promote follow-ups and vaccinations</li>
                </ul>
                <p>This creates a sustainable, district-wise network of informed women leaders, starting with Howrah district.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">🧍🏾‍♀️ Encouraging Dialogue & Dignity</h3>
                <p>One of Detect’s biggest achievements is that it helps women speak openly about their bodies—something that has long been taboo. It gives them language, space, and support to take charge of their health.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">Beyond the Clinic: Empowering Through Education</h2>
                <p>Cervical health is about more than screenings—it’s about breaking generational silence. Many women in rural India have never had a say in matters of their own health. They are told to endure, to hide discomfort, and to prioritize everyone else before themselves. Project Detect offers a radical alternative: knowledge, autonomy, and self-respect.</p>
                <blockquote className="border-l-4 border-primary pl-4 italic">
                    <p>“This is the first time in my life someone explained what happens inside my body.”</p>
                    <cite className="not-italic font-semibold">- A 58-year-old woman in a Howrah village</cite>
                </blockquote>
                <p>The goal is not just to catch cancer—but to start conversations that outlive the disease.</p>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">Real Stories. Real Impact.</h2>
                <h3 className="text-2xl font-semibold font-headline text-foreground">Sabita’s Second Chance</h3>
                <p>Sabita Devi, a 39-year-old farm laborer, attended a Detect camp out of curiosity. During screening, early signs of cervical cell changes were spotted. She was referred for further tests and treated before cancer could take hold. “I didn’t know I was sick. They told me in time. I feel like I’ve been given a new life,” she says.</p>

                <h3 className="text-2xl font-semibold font-headline text-foreground">Mina Becomes a Health Champion</h3>
                <p>Mina, an ASHA worker, participated in a training session by AIM Foundation and CNCI. Armed with new knowledge, she began visiting homes in her village—explaining cervical cancer in simple terms and convincing women to attend camps. “Before, even I was afraid to talk about these things. Now I help other women understand their bodies,” Mina proudly shares.</p>

                <h2 className="text-3xl font-bold font-headline text-foreground">How Detect Changes Lives at Every Level</h2>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>For Rural Women:</strong> Free access to screenings, information that empowers, dignified care in a safe space, and early detection that saves lives.</li>
                  <li><strong>For Health Workers:</strong> Practical training and upskilling, support to build trust, and tools to educate and refer women effectively.</li>
                  <li><strong>For the Healthcare System:</strong> Reduced burden of late-stage cancer cases, community-led prevention, and alignment with national health missions.</li>
                </ul>

                <h2 className="text-3xl font-bold font-headline text-foreground">Challenges We Face—and Why We Keep Going</h2>
                <p>The path is not easy. Project Detect works against deep-rooted taboos, misinformation, logistical barriers, and restrictive gender norms. Yet, the team continues—village by village, camp by camp, fueled by the belief that every woman deserves to live a full, healthy life. And each time a woman walks in fearful, and walks out relieved and informed—we are reminded: This matters. This is saving lives.</p>

                <div className="bg-muted p-8 rounded-lg my-12 text-center">
                  <h2 className="text-3xl font-bold font-headline text-foreground">How You Can Help: Your ₹500 Could Save a Life</h2>
                  <p className="mt-4">Too many women are dying of a disease that is preventable. Your contribution can change that.</p>
                  <ul className="list-none space-y-2 mt-4">
                    <li>₹500 funds one cervical cancer screening</li>
                    <li>₹2,000 trains a frontline health worker</li>
                    <li>₹5,000 organizes an entire awareness session for 50 women</li>
                    <li>₹25,000 supports a full mobile camp in a remote village</li>
                  </ul>
                  <p className="mt-4 italic">With your help, a mother may live to see her daughter’s wedding. A sister may avoid the pain of late-stage cancer. A daughter may grow up believing her health matters.</p>
                  <Button asChild size="lg" className="mt-6 transition-transform transform hover:scale-105">
                    <Link href="/detect">Donate to Project Detect</Link>
                  </Button>
                </div>
                
                <h2 className="text-3xl font-bold font-headline text-foreground">The Bigger Picture: Not Just Saving Lives—Changing Culture</h2>
                <p>Cervical cancer may be the starting point—but Project Detect is changing the cultural narrative around women’s health. It’s building a generation of informed women who ask questions, demand care, talk to their daughters, and visit clinics without fear. It’s also encouraging men to support their wives’ health, breaking the myth that reproductive health is only a “woman’s issue.” This cultural shift—slow, quiet, but powerful—is the true legacy of Project Detect.</p>
                
                <div className="text-center pt-8">
                    <p className="text-2xl font-semibold text-primary font-headline flex items-center justify-center gap-2">
                        <Stethoscope /> Join the Movement. Be Her Shield.
                    </p>
                    <p className="mt-2">Cervical cancer doesn’t have to be a death sentence. But silence can be. Let’s detect. Let’s protect. Let’s act.</p>
                    <div className="mt-4 flex gap-4 justify-center">
                        <Button asChild><Link href="/detect">Donate</Link></Button>
                        <Button asChild variant="outline"><Link href="/volunteering">Volunteer</Link></Button>
                        <Button asChild variant="outline"><Link href="/corporate-social-responsibility">Partner</Link></Button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
