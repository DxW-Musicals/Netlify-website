---
type: PageLayout
title: About
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
    title: About DxW Musicals
    subtitle: Creating original musical theater productions
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
          - pb-24
          - pl-4
          - pr-4
        alignItems: center
        flexDirection: col
        textAlign: center
    type: HeroSection
  - type: FeaturedPeopleSection
    title:
      text: Meet the Team
      color: text-dark
      type: TitleBlock
    people:
      - content/data/team/griffin-waliczek.json
      - content/data/team/max-dobroski.json
    variant: two-col-grid
    colors: colors-f
    styles:
      self:
        padding:
          - pt-28
          - pb-28
          - pl-4
          - pr-4
        justifyContent: center
---