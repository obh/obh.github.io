---
layout: post
title:  "Learning 3D Priors with Adversarial Novel View Generation"
date:   2019-07-21 
categories: CV
---

We  study  the  problem  of  learning  single  image  3D  re-construction  for  the  scenario  when  no  3D  supervision  is available for training. Our approach relies on one or many images of each object and their corresponding viewpoints.The method we propose is a combination of multi-view consistency for learning 3D shape priors and generative adversarial networks (GANs) for generating images.  Training a reconstructor using a single or a few views per object is a challenging task due to the ambiguity in the shape from unobserved viewpoints. We show that our approach produces visually reasonable shapes even when the dataset consists of one view per object.  We resolve the ambiguity by explicitly generating images for unobserved viewpoints by leveraging the ability of GANs to produce realistic high fidelity images.This image generation network is in-turn supervised by the projections of the produced shapes from these unobserved views.  The key idea of our paper is a mutual supervision between these two components.  While projecting the generated shape from another viewpoint produces a view that is geometrically consistent with the input images, the GAN produces images that fit within the distribution of real images.
[Paper]({{ site.url }}/assets/Learning 3D Priors with Adversarial Novel View Generation.pdf)


