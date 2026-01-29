---
type: PageLayout
title: Home
metaTitle: DxW Musicals - Original Musical Theater Productions
metaDescription: DxW Musicals is creating original musical theater productions. Preview our work in progress and get in touch with our creative team.
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/launching-soon-bg.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 25
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: Launching Soon
    subtitle: Preview our work in progress
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        flexDirection: col
        textAlign: center
    type: HeroSection
  - type: TextSection
    colors: colors-f
    variant: variant-a
    text: >
      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/griffin-757805524/sets/alcatraz&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: 'Contact Us'
    text: Drop us a line!
    form:
      type: FormBlock
      elementId: contact-form
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Name
          isRequired: false
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Message
          isRequired: false
          width: full
          type: TextareaFormControl
        - name: updatesConsent
          label: Sign up for our email list for updates, promotions, and more.
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: Send
      styles:
        self:
          textAlign: left
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        flexDirection: col
        textAlign: center
---
