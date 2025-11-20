# Screenshots & Media Guide

This guide explains where to add screenshots, videos, and other visual media to the NeuraFund repository.

---

## 📁 Directory Structure

Create this folder structure in the root of your repository:

```
neurafund/
├── screenshots/
│   ├── README.md                    ← Gallery index
│   ├── auth/
│   │   ├── login.png               (800x600)
│   │   ├── register-student.png    (800x600)
│   │   └── register-vendor.png     (800x600)
│   ├── student/
│   │   ├── dashboard.png           (1440x900)
│   │   ├── task-details.png        (1440x900)
│   │   ├── live-tracking.png       (1440x900)
│   │   ├── student-chat.png        (1440x900)
│   │   ├── proof-upload.png        (1440x900)
│   │   ├── wallet-student.png      (1440x900)
│   │   └── rating-modal.png        (600x500)
│   ├── vendor/
│   │   ├── dashboard.png           (1440x900)
│   │   ├── create-task.png         (800x700)
│   │   ├── vendor-live-view.png    (1440x900)
│   │   ├── proof-review.png        (1440x900)
│   │   ├── mpesa-deposit.png       (800x600)
│   │   └── task-history.png        (1440x900)
│   ├── features/
│   │   ├── notifications.png       (400x300)
│   │   ├── live-map.png            (800x600)
│   │   ├── mobile-dashboard.png    (375x667)
│   │   ├── navbar.png              (1440x80)
│   │   ├── filters.png             (1440x150)
│   │   └── profile-card.png        (300x400)
│   └── comparison/
│       ├── before-optimization.png
│       └── after-optimization.png
├── videos/
│   ├── student-workflow.mp4        (2-3 min)
│   ├── vendor-workflow.mp4         (2-3 min)
│   ├── live-tracking-demo.mp4      (1-2 min)
│   ├── payment-integration.mp4     (1-2 min)
│   └── platform-overview.mp4       (5-7 min)
├── docs/
│   └── Screenshots/
│       └── (additional screenshots organized by feature)
└── README.md
```

---

## 🎨 Screenshot Specifications

### Resolution Guidelines

| Screen Type | Resolution | Usage |
|------------|-----------|-------|
| Full Dashboard | 1440x900 | Main UI screenshots |
| Modal/Form | 800x600 | Popup dialogs |
| Mobile | 375x667 | Responsive design |
| Header | 1440x80 | Navigation bar |
| Icon/Feature | 400x300 | Feature highlights |

### File Requirements

- **Format:** PNG (for screenshots), JPG (for photos)
- **Quality:** High quality (no compression artifacts)
- **Max Size:** 200KB per image (optimize with tools)
- **DPI:** 72 DPI is standard for web
- **Naming:** Descriptive, lowercase with hyphens
  - ✅ Good: `student-dashboard.png`
  - ❌ Bad: `Screenshot1.png`

### Image Optimization Tools

```bash
# Compress PNG files
pngquant screenshot.png --output optimized.png

# Optimize JPEG
jpegoptim -m85 screenshot.jpg

# Batch resize
mogrify -resize 1440x900 *.png

# Using ImageMagick
convert input.png -quality 85 output.jpg

# Online tools
- TinyPNG.com (automatic compression)
- Optimizilla.com (manual control)
- Compressor.io (multiple formats)
```

---

## 📸 Screenshots to Capture

### Authentication Screens

#### 1. Login Page
```
Location: /login
File: screenshots/auth/login.png
Size: 1440x900

Include:
- Email input field
- Password input field
- Login button
- "Register as Student/Vendor" links
- Logo in header
- Any validation messages
```

#### 2. Student Registration
```
Location: /register/student
File: screenshots/auth/register-student.png
Size: 1440x900

Include:
- First name input
- Last name input
- University email input
- University dropdown
- Student ID field (optional)
- Profile picture upload
- Password fields
- Register button
```

#### 3. Vendor Registration
```
Location: /register/vendor
File: screenshots/auth/register-vendor.png
Size: 1440x900

Include:
- First name input
- Last name input
- Business email input
- Business name input
- Business location input
- Goods type input
- Profile picture upload
- Password fields
- Register button
```

### Student Experience Screens

#### 4. Student Dashboard
```
Location: /dashboard/student
File: screenshots/student/dashboard.png
Size: 1440x900

Include:
- Navbar with student name
- Welcome message
- Wallet balance display (KES)
- Available tasks count
- My tasks count
- Tabs: Available Tasks | My Tasks | Wallet
```

#### 5. Task Details
```
Location: /tasks/:id
File: screenshots/student/task-details.png
Size: 1440x900

Include:
- Task title and description
- Pickup location
- Dropoff location
- Estimated time
- Reward amount (KES)
- Vendor profile card (name, rating, reviews)
- "Claim Task" button
```

#### 6. Live Tracking View
```
Location: /dashboard/student (during in-progress task)
File: screenshots/student/live-tracking.png
Size: 1440x900

Include:
- Interactive Leaflet map
- Blue marker for student location
- Address text below map
- Chat window on right side
- Task status indicator
- Back button
```

#### 7. Student Chat
```
Location: Chat within live tracking
File: screenshots/student/student-chat.png
Size: 1440x900

Include:
- Message history
- Student message (blue bubble, right side)
- Vendor message (gray bubble, left side)
- Profile pictures in bubbles
- Message timestamps
- Input field for typing
- Send button
```

#### 8. Proof Upload
```
Location: /dashboard/student (in-progress task)
File: screenshots/student/proof-upload.png
Size: 1440x900

Include:
- Task summary panel
- "Select files" button
- File input showing selected files
- File names and sizes
- Upload progress (optional)
- Submit & Cancel buttons
```

#### 9. Student Wallet
```
Location: /dashboard/student → Wallet tab
File: screenshots/student/wallet-student.png
Size: 1440x900

Include:
- Current balance display (large)
- "Withdraw to M-Pesa" form
- Amount input field
- Phone number input (254...)
- Withdraw button
- Transaction history table
- Filter by type dropdown
```

#### 10. Rating Modal
```
Location: Completed task
File: screenshots/student/rating-modal.png
Size: 600x500

Include:
- Vendor profile (name, photo)
- 5-star rating selector
- Comment text area
- "Submit Rating" button
- Cancel button
```

### Vendor Experience Screens

#### 11. Vendor Dashboard
```
Location: /dashboard/vendor
File: screenshots/vendor/dashboard.png
Size: 1440x900

Include:
- Navbar with vendor name
- Welcome message
- Wallet balance (large display)
- Pending review count
- In-progress count
- Available tasks count
- "Create New Task" button
- Task tabs by status
```

#### 12. Create Task Form
```
Location: Create task modal/page
File: screenshots/vendor/create-task.png
Size: 800x700

Include:
- Description text area
- Pickup location input
- Dropoff location input
- Estimated time input (dropdown or slider)
- Reward amount input
- "Create Task" button
- Cancel button
- Any validation messages
```

#### 13. Vendor Live View
```
Location: Vendor viewing in-progress task
File: screenshots/vendor/vendor-live-view.png
Size: 1440x900

Include:
- Leaflet map with student location
- Student name and photo
- Current address
- Chat window
- "View Live / Chat" button active
- Task timer/progress
```

#### 14. Proof Review
```
Location: Vendor reviewing submitted proof
File: screenshots/vendor/proof-review.png
Size: 1440x900

Include:
- Task summary (description, student name)
- Proof images in gallery/carousel
- Image count (e.g., "1 of 3")
- "Approve & Pay" button
- "Reject" button
- Review notes text area
```

#### 15. M-Pesa Deposit
```
Location: Vendor wallet → Deposit section
File: screenshots/vendor/mpesa-deposit.png
Size: 800x600

Include:
- Amount input field
- Phone number input (254...)
- "Deposit" button
- Success message ("STK Push Sent!")
- Transaction details (amount, new balance)
```

#### 16. Task History
```
Location: Vendor dashboard → Task history
File: screenshots/vendor/task-history.png
Size: 1440x900

Include:
- Completed tasks list
- Student names
- Task descriptions
- Completion dates
- Reward amounts
- Student ratings
- Total earnings summary
```

### Feature Screens

#### 17. Toast Notifications
```
Location: Any page after action (success/error)
File: screenshots/features/notifications.png
Size: 400x300

Include:
- Green success toast (✓ icon)
- Red error toast (✗ icon)
- Blue info toast (ℹ icon)
- Auto-dismiss timer
- Close button
```

#### 18. Live Map
```
Location: Live tracking screen
File: screenshots/features/live-map.png
Size: 800x600

Include:
- OpenStreetMap tiles
- Blue marker pin
- Location address below map
- Zoom controls
- Attribution text
```

#### 19. Mobile Dashboard
```
Location: /dashboard (on mobile device)
File: screenshots/features/mobile-dashboard.png
Size: 375x667

Include:
- Full dashboard responsive layout
- Cards stacking vertically
- Hamburger menu
- Touch-friendly buttons
- All information readable
```

#### 20. Navbar
```
Location: Top of any page
File: screenshots/features/navbar.png
Size: 1440x80

Include:
- NeuraFund logo (left)
- Navigation links
- Dashboard link
- User name and role
- Logout button (right)
```

#### 21. Task Filters
```
Location: Available tasks page
File: screenshots/features/filters.png
Size: 1440x150

Include:
- Location search input
- Reward range sliders
- Time duration filter
- Filter buttons
- Clear filters button
```

#### 22. Profile Card
```
Location: Task details or user profile
File: screenshots/features/profile-card.png
Size: 300x400

Include:
- Profile picture
- Name
- Role (Student/Vendor)
- University or Business info
- Star rating with count
- "View Profile" link (optional)
```

---

## 🎬 Video Guidelines

### Video 1: Student Workflow (2-3 minutes)

**Script:**
```
1. Register as student (0:00-0:15)
   - Show registration form
   - Fill in details
   - Submit

2. Browse tasks (0:15-0:45)
   - Show available tasks list
   - Apply filters
   - Show task details
   - Explain reward, location, time

3. Claim task (0:45-1:00)
   - Click "Claim Task"
   - Show confirmation
   - Task moved to "My Tasks"

4. Live tracking (1:00-1:45)
   - Map shows student location
   - Real-time updates
   - Chat with vendor
   - Send/receive messages
   - Location address displayed

5. Submit proof (1:45-2:15)
   - Select photo files
   - Upload files
   - Task status changes to "Pending Review"

6. Payment received (2:15-2:45)
   - Vendor approves proof
   - Wallet balance increases
   - Transaction appears in history
   - Show "Rate Vendor" button

7. Withdraw money (2:45-3:00)
   - Go to wallet
   - Enter withdrawal amount
   - Confirm with M-Pesa
   - "Funds sent to M-Pesa" message
```

**File:** `videos/student-workflow.mp4`

### Video 2: Vendor Workflow (2-3 minutes)

**Script:**
```
1. Register as vendor (0:00-0:15)
   - Show registration form
   - Fill in business details
   - Submit

2. Deposit funds (0:15-0:45)
   - Go to wallet
   - Click "Deposit"
   - Enter amount and phone
   - STK Push appears
   - Enter M-Pesa PIN
   - Balance updated

3. Create task (0:45-1:30)
   - Click "Create New Task"
   - Fill in task details
   - Set reward amount
   - Submit
   - Task appears as "available"

4. Monitor student (1:30-2:15)
   - Student claims task
   - View live location on map
   - See student moving
   - Address updates
   - Chat with student in real-time

5. Review proof (2:15-2:45)
   - Student uploads photos
   - View image gallery
   - Approve task
   - Payment processed automatically
   - Wallet deducted

6. Rate student (2:45-3:00)
   - Click "Rate Student"
   - Give 5-star rating
   - Add comment
   - Submit
```

**File:** `videos/vendor-workflow.mp4`

### Video 3: Live Tracking Demo (1-2 minutes)

**Script:**
```
1. Start tracking (0:00-0:15)
   - Student claims task
   - Chat opens
   - Tracking starts

2. See location (0:15-0:45)
   - Map shows student position
   - Blue marker on map
   - Address displayed
   - Zoom controls shown

3. Real-time updates (0:45-1:30)
   - Student moves around campus
   - Marker updates every 5 seconds
   - Address changes as student moves
   - Vendor sees updates in real-time

4. Complete task (1:30-1:45)
   - Student reaches destination
   - Takes proof photo
   - Vendor sees final location
   - Task completion confirmation
```

**File:** `videos/live-tracking-demo.mp4`

### Video 4: M-Pesa Payment Integration (1-2 minutes)

**Script:**
```
1. Vendor deposits (0:00-0:30)
   - Fill deposit form
   - Enter 500 KES
   - Enter phone number
   - Click "Deposit"
   - STK Push notification appears on phone
   - Show entering M-Pesa PIN

2. Balance updated (0:30-0:45)
   - "Deposit successful" message
   - Wallet balance increased
   - Transaction recorded

3. Task payment (0:45-1:15)
   - Vendor approves task
   - "Payment processed" message
   - Vendor balance: -reward
   - Student balance: +reward
   - Both see transaction

4. Student withdrawal (1:15-2:00)
   - Student goes to wallet
   - Enters 200 KES withdrawal
   - Enters phone number
   - Clicks "Withdraw"
   - "Funds sent to M-Pesa" message
   - Student receives SMS confirmation
```

**File:** `videos/payment-integration.mp4`

---

## 🎥 Video Recording Setup

### Software Options

**Screen Recording:**
- **Mac:** QuickTime (built-in), ScreenFlow, OBS Studio
- **Windows:** OBS Studio (free), ShareX, Camtasia
- **Linux:** OBS Studio, SimpleScreenRecorder, Kazam

### Recording Settings

```
Resolution:     1920x1080 (Full HD)
Frame Rate:     30 FPS
Bitrate:        6-10 Mbps
Codec:          H.264 (MP4)
Audio:          AAC, 128 kbps
Format:         .mp4
```

### OBS Studio Configuration

```
Settings:
  Video:
    Canvas: 1920x1080
    FPS: 30
  Audio:
    Sample Rate: 48 kHz
    Channels: Stereo
  Output:
    Format: mp4
    Encoder: H.264
    Bitrate: 8000 kbps
```

### Post-Production

1. **Editing:**
   - Trim intro/outro (5 seconds each)
   - Add transitions between scenes (1 second)
   - Include 2-3 second title card

2. **Audio:**
   - Normalize levels to -3dB
   - Add background music (low volume)
   - Remove background noise
   - Add voice-over if needed

3. **Subtitles:**
   - Add captions for key points
   - Font: Arial/Helvetica, white with black outline
   - Timing: 3 seconds per line

4. **Export:**
   - Format: MP4 (H.264)
   - Bitrate: 8-10 Mbps
   - Target size: 50-200 MB per minute

---

## 📤 Hosting Screenshots & Videos

### Option 1: GitHub (Recommended for small files)

```bash
# Add screenshots folder to Git LFS (Large File Storage)
git lfs install
git lfs track "screenshots/**/*.png"
git lfs track "videos/**/*.mp4"

# Commit as normal
git add .
git commit -m "Add screenshots and videos"
git push
```

### Option 2: GitHub Releases

```bash
# Create release with video attachments
gh release create v1.0.0 \
  --title "NeuraFund v1.0.0" \
  videos/student-workflow.mp4 \
  videos/vendor-workflow.mp4
```

### Option 3: YouTube (Recommended for videos)

```
1. Create YouTube channel or playlist
2. Upload demo videos (unlisted or public)
3. Link in README with embedded player:

[![Watch Video](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
```

### Option 4: External Hosting

- **Cloudinary:** Images and videos with CDN
- **Vimeo:** Professional video hosting
- **AWS S3:** Scalable media storage
- **Bunny CDN:** Cost-effective media delivery

---

## 🔗 Embedding in README

### Screenshot Syntax

```markdown
# With basic link
![Student Dashboard](screenshots/student/dashboard.png)

# With custom width
<img src="screenshots/student/dashboard.png" width="600" alt="Student Dashboard" />

# With caption
<figure>
  <img src="screenshots/student/dashboard.png" alt="Student Dashboard" width="600" />
  <figcaption>Students can browse available tasks with filters</figcaption>
</figure>

# Clickable image (links to full size)
[![Student Dashboard](screenshots/student/dashboard.png)](screenshots/student/dashboard.png)
```

### Video Syntax

```markdown
# YouTube embed
[![Watch Demo](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

# HTML5 video player
<video width="600" controls>
  <source src="videos/student-workflow.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

# With caption
<figure>
  <video width="600" controls>
    <source src="videos/student-workflow.mp4" type="video/mp4">
  </video>
  <figcaption>Complete student workflow from registration to payment</figcaption>
</figure>
```

---

## 📊 Screenshot Gallery Index

Create `screenshots/README.md` with:

```markdown
# NeuraFund Screenshots Gallery

## Authentication
- [Login](auth/login.png)
- [Student Registration](auth/register-student.png)
- [Vendor Registration](auth/register-vendor.png)

## Student Experience
- [Dashboard](student/dashboard.png)
- [Task Details](student/task-details.png)
- [Live Tracking](student/live-tracking.png)
- [Chat](student/student-chat.png)
- [Proof Upload](student/proof-upload.png)
- [Wallet](student/wallet-student.png)
- [Rating](student/rating-modal.png)

[... more sections ...]
```

---

## ✅ Checklist

Before committing screenshots/videos:

- [ ] All screenshots captured at correct resolution
- [ ] File sizes optimized (< 200KB per image)
- [ ] Filenames are descriptive and lowercase
- [ ] No sensitive information visible (emails, phone numbers)
- [ ] Consistent styling across all screenshots
- [ ] Videos have clear audio
- [ ] Videos include captions/subtitles
- [ ] All files organized in correct directories
- [ ] README links point to correct paths
- [ ] GitHub LFS configured for large files
- [ ] Tested embeds in README render correctly

---

## 📝 Notes

- Update screenshots when UI changes significantly
- Keep video demos under 5 minutes total
- Use consistent branding (colors, fonts)
- Get team feedback before finalizing
- Archive old screenshots in `/archive` folder
- Update this guide when adding new media

---

**Last Updated:** November 2025 
**Maintained By:** NeuraFund Documentation Team