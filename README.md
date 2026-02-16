# 🎯 Sunstream Sales Dashboard

**Live Dashboard:** https://divinesuccessflow.github.io/sunstream-dashboard/

## Overview
Real-time B2B prospecting intelligence dashboard combining exhibition data (Supabase) with live LinkedIn outreach performance (SalesRobot API).

## Features

### 📊 Signal Overview
- Total companies, decision makers, exhibitions tracked
- High-intent companies (3+ exhibitions)
- Signal strength meter

### 🤖 SalesRobot Live (NEW!)
- **5 LinkedIn Accounts Tracked:**
  - Charu Latha
  - Hima Sudhi
  - Michael D'Souza
  - Raghavendra Raghav
  - Girish M

- **Metrics:**
  - Total prospects, sent, accepted, replies
  - Accept rate & reply rate
  - Campaign-level performance
  - Hiring vs Exhibition campaign comparison
  - Campaign progress tracking

### 🎯 Signal Intelligence (NEW!)
**20 outreach signal categories** for high-intent prospecting:
- 🔥 Hiring Signal (Active)
- 🎪 Exhibition Attendance (Active)
- 💰 Funding Round (Planned)
- 👔 Leadership Change (Planned)
- ...and 16 more planned signals

### 🎪 Exhibition Intelligence
- 691 exhibitions tracked
- Top exhibitions by company count
- Network density analysis
- Company-exhibition mapping

### 🏢 Company Signals
- Exhibition attendance tracking
- Decision maker identification
- Contact info availability
- ICP scoring

### 👥 Decision Maker Map
- 20,860+ employees tracked
- Seniority distribution
- Contact availability breakdown

### 🕸️ Relationship Graph
- Companies at shared exhibitions
- Partner/competitor identification

### 🎯 Opportunity Pipeline
- Tier 1 (HOT): 3+ exhibitions + DMs + contact
- Tier 2 (WARM): 2+ exhibitions OR DMs
- Tier 3 (COLD): Single exhibition

### 📧 Outreach Readiness
- Email availability
- Phone availability
- Enrichment needs

## Technical Details

**Architecture:**
- Single-file HTML dashboard (83.7 KB)
- No build process required
- Embedded credentials (Supabase + SalesRobot)
- Auto-refresh: 5 minutes

**APIs Integrated:**
1. **Supabase** (Exhibition data)
   - Companies
   - Employees
   - Exhibitions
   - Exhibitor connections

2. **SalesRobot API** (LinkedIn outreach)
   - LinkedIn accounts
   - Campaigns
   - Connection requests
   - Acceptance rates
   - Replies

**Technologies:**
- Vanilla JavaScript
- Tailwind CSS (CDN)
- Chart.js (CDN)
- Dark theme (#0f172a)

## Quick Start

**Local Development:**
```bash
# Clone the repo
git clone https://github.com/divinesuccessflow/sunstream-dashboard.git
cd sunstream-dashboard

# Open in browser
open index.html
```

**Or just visit:** https://divinesuccessflow.github.io/sunstream-dashboard/

## Data Sources

| Source | Data Type | Update Frequency |
|--------|-----------|------------------|
| Supabase | Exhibition & company data | 5 min |
| SalesRobot API | LinkedIn outreach metrics | 5 min |
| Signal Intelligence | Outreach signals | Manual (for now) |

## Configuration

All credentials are embedded in the dashboard's CONFIG object:
```javascript
const CONFIG = {
    SUPABASE_URL: '...',
    SUPABASE_KEY: '...',
    SALESROBOT_API_URL: 'https://api.boomtechinc.com',
    SALESROBOT_API_KEY: '...',
    LINKEDIN_ACCOUNTS: [...]
};
```

## Repository

- **GitHub:** https://github.com/divinesuccessflow/sunstream-dashboard
- **Live URL:** https://divinesuccessflow.github.io/sunstream-dashboard/
- **Branch:** main
- **Deploy Method:** GitHub Pages (automatic from main branch)

## Files

- `index.html` - Complete dashboard (single file)
- `README.md` - This file
- `DEPLOYMENT_SUMMARY.md` - Detailed deployment documentation

## Next Steps

1. ✅ Test live dashboard
2. ✅ Verify SalesRobot API connections
3. Activate remaining 18 signal categories
4. Add CSV export functionality
5. Implement company detail modals
6. Build signal-based automation

## Support

For issues or feature requests, contact the development team.

---

**Dashboard deployed: February 16, 2026**  
**Status: ✅ LIVE**
