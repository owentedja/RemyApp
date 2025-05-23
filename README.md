# Remy – AI-Driven Sleep Companion  
*A cross-platform Expo / React Native application*

---

## Overview
Remy is a mobile application built on React Native using Expo and designed to help users assess and improve their sleep.  
The app combines quantitative sleep-debt tracking, AI-generated ambient music, and a GPT-powered conversational coach—delivered through a modern, responsive user interface for both iOS and Android.  
The goal of the app was to be able to sync to smart watches to provide real-time feedback on users’ sleeping patterns. Due to the constraints of restricted data from smart-watch databases and syncing with the smart watch device sensors, the Sleep Analysis page displays a hard-coded example of what the expected output would look like, along with the chatbot intended to support users with any questions regarding their sleeping pattern.

---

## Core Features

| Feature | Description |
|---------|-------------|
| **Sleep-Debt Visualisation** | Circular progress ring that displays current sleep debt in hours. |
| **Sleep Analysis Assistance** | Chat interface backed by GPT API providing concise, evidence-based guidance on sleep hygiene. |
| **AI Music Generation** | Cloud-hosted model streams personalized ambient tracks intended to improve sleep onset and continuity. |
| **Secure Cloud Sync** | User profile, sleep metrics, and chat history are stored in Firebase (Authentication + Firestore). |
| **Modern UI** | Gradient backgrounds, subtle animations, and type-safe components built with React Native. |
| **Single-Code-Base Deployment** | Developed entirely in Expo, enabling rapid OTA updates and EAS-based builds for App Store and Google Play. |
