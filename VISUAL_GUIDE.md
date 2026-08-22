# Visual Guide - What You'll See

## 🎯 Feature 1: Navbar with WhatsApp Button

### Desktop View (1200px+)
```
┌─────────────────────────────────────────────────────────────────────┐
│ THANEKAR  [Home] [About] [Config] [Pricing] [Amenities] [Floor] [Loc]  🟢 📄 🟨│
│ DNSB                                                    WA  Broch  Call  │
└─────────────────────────────────────────────────────────────────────┘

🟢 = Green WhatsApp button (circular)
📄 = Brochure button (outlined gold)
🟨 = Call Now button (filled gold)
```

### On Click WhatsApp Button:
```
🟢 WhatsApp Button
└─► Tooltip appears below:
    ┌─────────────────────┐
    │ Contact:            │
    │ +91 8390662002      │
    └─────────────────────┘
```

---

## 🎯 Feature 2: Footer with Logo & Enquiry

### Desktop View (Full Width)
```
┌─────────────────────────────────────────────────────────────────────────┐
│ FOOTER (Dark Brown Background)                                          │
├──────────┬──────────────┬──────────────┬─────────────────────────────────┤
│ LOGO     │ QUICK LINKS  │ CONTACT      │ FOLLOW US                       │
│ ┌─────┐  │              │              │ [Instagram] [WhatsApp]          │
│ │Logo │  │ > Home       │ ☎ Call Now   │                                 │
│ │ 100 │  │ > About      │ ◉ WhatsApp   │ ENQUIRE NOW                     │
│ │ x   │  │ > Config     │ ✉ Email      │ ┌──────────────────┐           │
│ │100  │  │ > Pricing    │ ● Address    │ │  Enquire Now     │ ← Button  │
│ │     │  │ > Amenities  │              │ └──────────────────┘           │
│ │     │  │ > Floors     │              │ ─────────────────────           │
│ │     │  │ > Location   │              │ DOWNLOAD BROCHURE               │
│ │━━━━━│  │              │              │ ┌──────────────────┐           │
│ └─────┘  │              │              │ │ ▣ Download PDF   │           │
│          │              │              │ └──────────────────┘           │
│ THANEKAR │              │              │                                 │
│ ─DNSB─   │              │              │                                 │
│          │              │              │                                 │
│ Premium  │              │              │                                 │
│ residential│             │              │                                 │
│ and comm. │              │              │                                 │
└──────────┴──────────────┴──────────────┴─────────────────────────────────┘
```

### On Click "Enquire Now":
```
┌─ MODAL OVERLAY (Dark semi-transparent) ──────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────┐  │
│ │ X                                                               │  │
│ ├─────────────────────────────────────────────────────────────────┤  │
│ │ 📝 Enquire Now                                                  │  │
│ │    Get in touch with us for more information                   │  │
│ ├─────────────────────────────────────────────────────────────────┤  │
│ │                                                                 │  │
│ │ Full Name:      [___________________]                          │  │
│ │                                                                 │  │
│ │ Email:          [______________]    Phone:    [______________] │  │
│ │                                                                 │  │
│ │ Message:        [_____________________________]                │  │
│ │                 [_____________________________]                │  │
│ │                 [_____________________________]                │  │
│ │                                                                 │  │
│ │                 ┌──────────────────────┐                       │  │
│ │                 │ Submit Enquiry       │                       │  │
│ │                 └──────────────────────┘                       │  │
│ │                                                                 │  │
│ └─────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘

After Submit:
┌─ MODAL OVERLAY ──────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────┐  │
│ │ X                                                               │  │
│ ├─────────────────────────────────────────────────────────────────┤  │
│ │                                                                 │  │
│ │                           ⭕ ✓                                  │  │
│ │                       (Green circle)                           │  │
│ │                                                                 │  │
│ │                        Thank You!                              │  │
│ │                                                                 │  │
│ │              Your enquiry has been submitted                   │  │
│ │                     successfully.                              │  │
│ │                                                                 │  │
│ │                  We'll get back to you soon.                   │  │
│ │                                                                 │  │
│ └─────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Feature 3: Floor Plans Section - Fixed Alignment

### Desktop View (1200px+)
```
┌─────────────────────────────────────────────────────────────────────────┐
│                          Floor Plans                                    │
│              Explore the thoughtfully designed floor plans              │
│                     of Thanekar DNSB.                                   │
│                                                                         │
│ ┌────────────────────────────┐  ┌────────────────────────────┐         │
│ │                            │  │                            │         │
│ │  ┌──────────────────────┐  │  │  ┌──────────────────────┐  │         │
│ │  │                      │  │  │  │                      │  │         │
│ │  │  [FLOOR PLAN IMAGE]  │  │  │  │  [FLOOR PLAN IMAGE]  │  │         │
│ │  │                      │  │  │  │                      │  │         │
│ │  └──────────────────────┘  │  │  └──────────────────────┘  │         │
│ │                      THANEKAR DNSB       THANEKAR DNSB       │         │
│ │                      1st & 2nd Floor     3rd Floor          │         │
│ │                      ─────────────────   ─────────────────   │         │
│ │                      [View Plan →]       [View Plan →]       │         │
│ │                                                              │         │
│ └────────────────────────────┘  └────────────────────────────┘         │
│                                                                         │
│ ┌────────────────────────────┐  ┌────────────────────────────┐         │
│ │                            │  │                            │         │
│ │  ┌──────────────────────┐  │  │  ┌──────────────────────┐  │         │
│ │  │                      │  │  │  │                      │  │         │
│ │  │  [FLOOR PLAN IMAGE]  │  │  │  │  [FLOOR PLAN IMAGE]  │  │         │
│ │  │                      │  │  │  │                      │  │         │
│ │  └──────────────────────┘  │  │  └──────────────────────┘  │         │
│ │                      THANEKAR DNSB       THANEKAR DNSB       │         │
│ │                      4th Floor           5th Floor           │         │
│ │                      ─────────────────   ─────────────────   │         │
│ │                      [View Plan →]       [View Plan →]       │         │
│ │                                                              │         │
│ └────────────────────────────┘  └────────────────────────────┘         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Tablet View (1000px)
```
┌─────────────────────────────────────────────────────────────────────────┐
│                          Floor Plans                                    │
│              Explore the thoughtfully designed floor plans              │
│                     of Thanekar DNSB.                                   │
│                                                                         │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ┌──────────────────────┐          THANEKAR DNSB                   │  │
│ │ │                      │          1st & 2nd Floor                 │  │
│ │ │  [FLOOR PLAN IMAGE]  │          ─────────────────                │  │
│ │ │                      │          [View Plan →]                   │  │
│ │ │                      │                                           │  │
│ │ └──────────────────────┘                                           │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│ ┌────────────────────────────────────────────────────────────────────┐  │
│ │ ┌──────────────────────┐          THANEKAR DNSB                   │  │
│ │ │                      │          3rd Floor                        │  │
│ │ │  [FLOOR PLAN IMAGE]  │          ─────────────────                │  │
│ │ │                      │          [View Plan →]                   │  │
│ │ │                      │                                           │  │
│ │ └──────────────────────┘                                           │  │
│ └────────────────────────────────────────────────────────────────────┘  │
│ ... and so on                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mobile View (650px)
```
┌─────────────────────────────────────────┐
│           Floor Plans                   │
│  Explore the thoughtfully designed      │
│    floor plans of Thanekar DNSB.       │
│                                         │
│ ┌───────────────────────────────────┐   │
│ │ [FLOOR PLAN IMAGE]                │   │
│ │                                   │   │
│ │ THANEKAR DNSB                     │   │
│ │ 1st & 2nd Floor                   │   │
│ │ ─────────────────                 │   │
│ │ [  View Plan →  ]                 │   │
│ └───────────────────────────────────┘   │
│                                         │
│ ┌───────────────────────────────────┐   │
│ │ [FLOOR PLAN IMAGE]                │   │
│ │                                   │   │
│ │ THANEKAR DNSB                     │   │
│ │ 3rd Floor                         │   │
│ │ ─────────────────                 │   │
│ │ [  View Plan →  ]                 │   │
│ └───────────────────────────────────┘   │
│ ... and so on                           │
└─────────────────────────────────────────┘
```

---

## 🎨 Color Reference

```
Gold Highlights:      #d4af37  (Borders, Text, Dividers)
Dark Brown:           #2b1007  (Background, Text)
Light Brown:          #321208  (Section Background)
White:                #ffffff  (Text, Image Background)
Green (WhatsApp):     #25D366  (WhatsApp Button)
```

---

## ✨ Interactive Elements

### Navbar WhatsApp Button
- **Normal:** Green circular button
- **Hover:** Darker green, scales up 1.1x
- **Click:** Shows tooltip with contact number

### Enquire Now Button
- **Normal:** Gold background with dark text
- **Hover:** Transparent background with gold text, arrow slides right
- **Click:** Opens form modal

### Floor Plan Cards
- **Normal:** Dark brown background with gold border
- **Hover:** Moves up 8px, shows shadow effect
- **On Mobile:** Becomes full width stacked layout

### View Plan Button
- **Normal:** Gold border, transparent background
- **Hover:** Gold background with dark text, arrow moves right
- **Click:** Ready for detail page (implementation pending)

---

## 📊 Responsive Breakpoints

| Screen Size | Navbar | Footer | Floor Plans |
|-------------|--------|--------|-------------|
| 1200px+ | Full layout | 4 columns | 2 cards per row |
| 768-1000px | Full layout | 4 columns | 1 card per row |
| 320-650px | Compact | Stacked | Stacked cards |

---

**Visual Guide Version:** 1.0
**Last Updated:** August 19, 2026
