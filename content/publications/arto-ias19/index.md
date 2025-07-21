---
title: 'Force-Driven Validation for Collaborative Robotics in Automated Avionics Testing'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Paolo Rocco
  - David Frisini

# Author notes (optional)
# author_notes:
#   - 'Equal contribution'
#   - 'Equal contribution'

date: '2025-07-02'
doi: 'https://doi.org/10.48550/arXiv.2505.10224'

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['conference paper']

# Publication name and optional abbreviated publication name.
publication: 19th International Autonomous Systems Conference (IAS-19)
publication_short: IAS-19

abstract: ARTO is a project combining collaborative robots (cobots) and Artificial Intelligence (AI) to automate functional test procedures for civilian and military aircraft certification. This paper proposes a Deep Learning (DL) and eXplainable AI (XAI) approach, equipping ARTO with interaction analysis capabilities to verify and validate the operations on cockpit components. During these interactions, forces, torques, and end effector poses are recorded and preprocessed to filter disturbances caused by low performance force controllers and embedded Force Torque Sensors (FTS). Convolutional Neural Networks (CNNs) then classify the cobot actions as Success or Fail, while also identifying and reporting the causes of failure. To improve interpretability, Grad CAM, an XAI technique for visual explanations, is integrated to provide insights into the models decision making process. This approach enhances the reliability and trustworthiness of the automated testing system, facilitating the diagnosis and rectification of errors that may arise during testing.

# Summary. An optional shortened abstract.
# summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere tellus ac convallis placerat. Proin tincidunt magna sed ex sollicitudin condimentum.

tags:
  - Collaborative Robotics
  - Deep Learning
  - eXplainable AI

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://www.arxiv.org/pdf/2505.10224'
url_code: 'https://github.com/pietrodardano/ForceDriven_Arto'
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: 'https://www.arxiv.org/abs/2505.10224'
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# image:
#   caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#   focal_point: ''
#   preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/). -->
