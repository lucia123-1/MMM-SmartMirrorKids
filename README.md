SmartMirrorKids is a custom MagicMirror² module developed as part of a Bachelor's Thesis in Biomedical Engineering. The project aims to support children with Autism Spectrum Disorder (ASD) in learning and performing personal hygiene routines through a smart mirror powered by Raspberry Pi.

The system provides visual guidance using pictograms and automatically records user interactions, enabling therapists to objectively monitor each session.

Features:
- User-friendly interface designed for children with ASD.
- Step-by-step hygiene routines using pictograms.
- Automatic recording of:
- Initial and final emotional state.
- Completed routine steps.
- Help requests.
- Focus Mode activations.
- Focus Mode to improve attention during activities.
- Modular and easily customizable design.
Technologies:
- MagicMirror²
- Raspberry Pi
- Node.js
- JavaScript
- HTML
- CSS
- ARASAAC pictograms

Installation
Install MagicMirror² following the official documentation:

https://github.com/MagicMirrorOrg/MagicMirror

Navigate to the MagicMirror modules directory:
cd ~/MagicMirror/modules
Clone this repository:
git clone https://github.com/YOUR_USERNAME/MMM-SmartMirrorKids.git
Enter the module directory:
cd MMM-SmartMirrorKids
Install the required dependencies:
npm install
Add the module to your config.js file:
{
    module: "MMM-SmartMirrorKids",
    position: "fullscreen_above",
    config: {
        // Module configuration
    }
}
Start MagicMirror².
How It Works

The module guides the user through a personal hygiene routine using pictograms displayed on the smart mirror. During each session, the system automatically records relevant information such as the user's emotional state, completed steps, help requests, and Focus Mode activations.

These data can be used by therapists to monitor user performance and evaluate progress over time.

Project Objective

The main objective of SmartMirrorKids is to promote independence in activities of daily living for children with Autism Spectrum Disorder by providing an accessible, customizable, and therapist-friendly technological solution.

Bachelor's Thesis

This project was developed as part of a Bachelor's Degree in Biomedical Engineering.

Thesis title:

Development of a SmartMirror to Support Children with Autism Spectrum Disorder in Personal Hygiene Routines.
Acknowledgements

This project was developed in collaboration with the GATEA Association, whose therapists contributed to the design of the proposed pilot study and provided valuable clinical insight into the needs of children with Autism Spectrum Disorder.

Special thanks also to the MagicMirror² community for providing the platform on which this module was built, and to ARASAAC for making their pictograms freely available.
