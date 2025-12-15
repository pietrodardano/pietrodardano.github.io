---
title: Embodiment-First Learning - Interactive Dashboard
date: 2025-12-15
external_link: static-website.html
summary: An interactive research dashboard exploring robust tactile sensing in adversarial environments through embodiment-first learning.
tags:
  - Robotics
  - Tactile Sensing
  - Embodiment Learning
  - Interactive Research
  - Adaptive Control
image:
  caption: "Embodiment-First Learning Dashboard"
  focal_point: Smart
---

## Embodiment-First Learning: Tactile Sensing Research

This project presents an interactive research dashboard for exploring **robust tactile sensing in adversarial environments**. It addresses the challenge of how robots maintain accurate tactile perception when operating with protective gloves, in wet/oily conditions, or with sensor wear.

### Key Features

- **Interactive Signal Analysis**: Visualize tactile sensor responses under different environmental conditions (clean, gloved, oily)
- **Parameter Space Exploration**: Understand how physical parameters (stiffness, friction) change with embodiment state
- **Embodiment-First Learning Loop**: Step through the proposed methodology for autonomous sensor state recognition and adaptation
- **AI-Powered Analysis**: Chat with an AI research assistant powered by Gemini to discuss the research concepts
- **Real-time Scenario Analysis**: Analyze how standard control approaches fail in different conditions

### Research Context

The robot must autonomously learn its own "body state" (clean, gloved, damaged) before attempting manipulation tasks. The dashboard demonstrates:

1. **State Recognition** - Comparing actual sensor responses against clean reference
2. **Physical Exploration** - Micro-movements to estimate physical parameters
3. **Adaptation** - Updating control gains based on learned embodiment state

### Technologies Used

- Interactive data visualization (Chart.js)
- Simulated tactile sensor signals
- Gemini API for research discussion
- Responsive HTML/CSS interface

[View the Interactive Dashboard →](static-website.html)
