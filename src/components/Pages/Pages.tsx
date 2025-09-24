import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Button } from 'semantic-ui-react';
import { Hero } from '../Home/Home';

const mdStyle = { color: 'white', margin: '50px', maxWidth: '800px' };

export const Privacy = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
# Boltzy Privacy Policy

*Last updated: September 2024*

## Introduction

Boltzy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our video streaming platform.

## Information We Collect

### Personal Information
- **Account Information**: When you sign up, we collect your email address and basic profile information
- **Usage Data**: We track how you interact with our platform to improve your experience
- **Device Information**: We collect information about your device and browser for compatibility purposes

### Content Data
- **Room Data**: Room names, descriptions, and participant lists are stored temporarily
- **Chat Messages**: Messages are stored only during active sessions
- **Video URLs**: We process video URLs you share but don't store the actual content

## How We Use Your Information

- **Service Delivery**: To provide synchronized video streaming and chat functionality
- **Communication**: To send important updates about our service
- **Improvement**: To analyze usage patterns and enhance our platform
- **Security**: To protect against abuse and ensure platform safety

## Data Sharing

We do not sell, trade, or rent your personal information to third parties. We may share information only in these circumstances:

- **Legal Requirements**: When required by law or to protect our rights
- **Service Providers**: With trusted partners who help us operate our platform
- **Consent**: When you explicitly agree to share information

## Data Security

- All data transmission is encrypted using industry-standard protocols
- Virtual browser sessions are isolated and destroyed after use
- We implement regular security audits and updates

## Your Rights

- **Access**: Request a copy of your personal data
- **Correction**: Update or correct your information
- **Deletion**: Request deletion of your account and data
- **Portability**: Export your data in a standard format

## Contact Us

For privacy-related questions or requests, contact us at:
- Email: privacy@boltzy.me
- Address: Gravitech LLC, Privacy Department

## Changes to This Policy

We may update this Privacy Policy periodically. We'll notify you of significant changes via email or platform notification.
`}
      </ReactMarkdown>
    </div>
  );
};

export const Terms = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
# Boltzy Terms of Service

*Last updated: September 2024*

## Acceptance of Terms

By accessing or using Boltzy, you agree to be bound by these Terms of Service and all applicable laws and regulations.

## Eligibility

- You must be at least 13 years old to use our service
- You must have the legal capacity to enter into this agreement
- You are responsible for ensuring your use complies with local laws

## Acceptable Use

### Permitted Uses
- Creating and joining video streaming rooms
- Sharing legal, non-infringing content
- Using the platform for personal and educational purposes
- Respecting other users and maintaining a positive community

### Prohibited Uses
- Sharing illegal, harmful, or infringing content
- Harassment, abuse, or threatening behavior
- Attempting to disrupt or damage our systems
- Violating intellectual property rights
- Spamming or unauthorized commercial use

## Content and Intellectual Property

### Your Content
- You retain ownership of content you share
- You grant us a license to display and distribute your content through our platform
- You are responsible for ensuring you have rights to share any content

### Our Content
- Boltzy and our platform are protected by intellectual property laws
- You may not copy, modify, or distribute our software without permission
- Our trademarks and logos are our exclusive property

## Privacy and Data

- Your privacy is important to us
- Please review our Privacy Policy for details on data collection and use
- We implement security measures to protect your information
- Virtual browser sessions are isolated and destroyed after use

## Service Availability

- We strive for high availability but cannot guarantee uninterrupted service
- We may perform maintenance that temporarily affects service
- We reserve the right to modify or discontinue features

## User Accounts

- You may create an account to access additional features
- You are responsible for maintaining account security
- You must provide accurate information when creating an account
- We may suspend or terminate accounts that violate these terms

## Limitation of Liability

- Boltzy is provided "as is" without warranties
- We are not liable for indirect, incidental, or consequential damages
- Our liability is limited to the amount you paid for the service

## Termination

- You may stop using our service at any time
- We may suspend or terminate accounts for violations of these terms
- Upon termination, your right to use the service ceases immediately

## Changes to Terms

- We may update these terms periodically
- Continued use after changes constitutes acceptance
- We will notify users of significant changes

## Contact Information

For questions about these terms, contact us at:
- Email: legal@boltzy.me
- Address: Gravitech LLC, Legal Department

## Governing Law

These terms are governed by the laws of the jurisdiction where Gravitech LLC is incorporated.
`}
      </ReactMarkdown>
    </div>
  );
};

export const FAQ = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
# Boltzy FAQ

*Frequently Asked Questions*

## Getting Started

### How do I create a room?
Click the "New Room" button on the homepage, or visit /create to set up a room with a specific video.

### Do I need to sign up?
No! You can use Boltzy without creating an account. However, signing up gives you access to additional features and better room management.

### How do I invite friends?
Share the room link with your friends. They can join instantly without needing to sign up.

## Features

### What's a VBrowser?
A Virtual Browser (VBrowser) is a browser running in the cloud that everyone in the room can see and control. It's perfect for watching videos that require specific browser settings or accessing content together.

### What platforms can I watch together?
- **YouTube**: Direct integration with YouTube's API
- **Netflix**: Synchronized viewing with our Netflix sync feature
- **File Sharing**: Upload and stream your own videos
- **Screen Sharing**: Share your desktop or browser tab
- **URL Sharing**: Paste any video URL to watch together
- **VBrowser**: Access any website together in a virtual browser

### How does Netflix work?
Netflix works just like Rave! When you click the Netflix button, it opens Netflix in a shared virtual browser that everyone can see and control. You can log into your Netflix account directly within the virtual browser and watch together seamlessly.

## Technical Questions

### Why did my VBrowser session stop?
VBrowsers automatically terminate after:
- 3 hours for free users
- 24 hours for subscribers
- When the room is empty for extended periods

### How many people can join a room?
We recommend up to 15 people for the best experience. Larger rooms may experience performance issues, especially with screen sharing or file sharing.

### Why am I not getting audio when screen sharing?
Audio sharing requires Chrome or Edge browsers. Make sure you're sharing a tab or desktop (not just a window) and that audio is enabled in your browser settings.

### Can I use Boltzy on mobile?
Yes! Boltzy works on mobile devices, though some features like screen sharing may be limited.

## Troubleshooting

### The video isn't syncing properly
- Make sure all participants have a stable internet connection
- Try refreshing the page
- Check if the video source supports our synchronization

### I can't hear audio
- Ensure your device volume is up
- Check if the video has audio enabled
- Try refreshing the page or rejoining the room

### The room is loading slowly
- Check your internet connection
- Try reducing video quality in settings
- Close other bandwidth-intensive applications

## Privacy and Security

### Is my data secure?
Yes! We use industry-standard encryption and don't store your personal content. Virtual browser sessions are isolated and destroyed after use.

### Can others see my screen when I'm not sharing?
No. Screen sharing only works when you explicitly enable it and share a specific tab or desktop.

### Do you track what I watch?
We don't store logs of the content you watch. We only process video URLs to enable synchronization.

## Support

### How do I report a problem?
Contact us at support@boltzy.me with details about the issue you're experiencing.

### Can I request a feature?
Absolutely! We love hearing from our users. Send feature requests to feedback@boltzy.me.

### Is there a Discord community?
Yes! Join our Discord server for community support, updates, and to connect with other users.
`}
      </ReactMarkdown>
    </div>
  );
};

export const DiscordBot = () => {
  return (
    <div>
      <Hero
        heroText={
          'Add the Boltzy Discord bot to your server for instant room creation.'
        }
        subText={'/watch to generate a new empty room'}
        subText2={'/watch video <URL_HERE> to create a room with a video'}
        action={
          <Button
            style={{ marginTop: '1em' }}
            color="blue"
            size="big"
            target="_blank"
            href="https://discord.com/api/oauth2/authorize?client_id=1071394728513380372&permissions=2147485696&scope=bot"
          >
            Add to Discord
          </Button>
        }
        image={'/hero-watch-together.svg'}
      />
    </div>
  );
};

export const About = () => {
  return (
    <div style={mdStyle}>
      <ReactMarkdown>
        {`
# About Boltzy

*Bringing people together through shared experiences*

## Our Mission

Boltzy was created to solve a simple problem: watching videos together shouldn't be complicated. Whether you're catching up with friends across the globe, hosting a virtual movie night, or collaborating on content, Boltzy makes it effortless to share moments in real-time.

## What Makes Us Different

### 🚀 **Instant Setup**
No downloads, no complicated setup. Just create a room and share the link. Your friends can join instantly from any device.

### 🎬 **Universal Compatibility**
Watch anything together:
- **YouTube** videos with full sync
- **Netflix** in a shared virtual browser (just like Rave!)
- **Your own files** with drag-and-drop upload
- **Any website** through our Virtual Browser
- **Screen sharing** for anything else

### ⚡ **Lightning-Fast Sync**
Our proprietary synchronization technology ensures everyone sees the same thing at the same time, down to the millisecond.

### 🔒 **Privacy First**
We don't store your content or track what you watch. Your privacy is our priority.

## The Technology

Boltzy is built on cutting-edge web technologies:

- **Real-time synchronization** using WebRTC and Socket.IO
- **Virtual browsers** running in secure cloud environments
- **Advanced video processing** for optimal streaming
- **Cross-platform compatibility** across all devices

## Our Story

Boltzy was born from the need to stay connected during challenging times. When physical distance became the norm, we realized that shared experiences shouldn't be limited by geography. Our team of developers and designers worked tirelessly to create a platform that feels natural, intuitive, and fun to use.

## The Team

Boltzy is developed by **Gravitech LLC**, a technology company focused on creating innovative solutions for digital communication and entertainment.

### Our Values

- **Simplicity**: Complex problems deserve simple solutions
- **Privacy**: Your data belongs to you
- **Quality**: We obsess over every detail of the user experience
- **Community**: We're building tools that bring people together

## Join the Community

- **Discord**: Join our community server for support and updates
- **GitHub**: Contribute to our open-source components
- **Twitter**: Follow us for the latest news and features

## Contact Us

- **General Inquiries**: hello@boltzy.me
- **Support**: support@boltzy.me
- **Business**: business@boltzy.me
- **Press**: press@boltzy.me

## Thank You

To our amazing community of users who have made Boltzy what it is today. Your feedback, suggestions, and support drive everything we do.

*Ready to start watching together? [Create your first room](/create) and experience the magic of shared viewing.*
`}
      </ReactMarkdown>
    </div>
  );
};
