# NGEP Web Application

A modern, full-featured web application built with React, TypeScript, and Material-UI.

## Features

### ✅ Authentication System
- Login/logout functionality
- User session management
- Protected routes with automatic redirects

### ✅ Modern Dashboard
- Real-time statistics and metrics
- System health monitoring
- Recent activities feed
- Quick action buttons
- Responsive design for all screen sizes

### ✅ Data Management
- Interactive data grid with CRUD operations
- Add, edit, and delete records
- Search and filtering capabilities
- Export/import functionality (UI ready)
- Real-time statistics tracking

### ✅ Analytics & Reporting
- Key performance metrics
- Traffic source analysis
- Top pages analytics
- Visual charts and progress indicators
- Trend analysis with color-coded indicators

### ✅ Settings & Configuration
- Tabbed settings interface
- User profile management
- Notification preferences
- Security settings (2FA, session timeout)
- Appearance customization
- Multi-language support (UI ready)

### ✅ Modern UI/UX
- Material-UI components with custom theming
- Responsive sidebar navigation
- Mobile-friendly design
- Dark/light mode support (UI ready)
- Consistent design system
- Professional color scheme and typography

## Technology Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5.15.0
- **Routing**: React Router DOM
- **Data Grid**: MUI X DataGrid
- **Icons**: Material-UI Icons
- **Styling**: Emotion (CSS-in-JS)
- **Build Tool**: Create React App with React Scripts

## Project Structure

```
ngep-web-app/
├── src/
│   ├── components/
│   │   └── Layout.tsx           # Main layout with navigation
│   ├── contexts/
│   │   └── AuthContext.tsx      # Authentication state management
│   ├── pages/
│   │   ├── Dashboard.tsx        # Main dashboard with metrics
│   │   ├── DataManagement.tsx   # CRUD operations with data grid
│   │   ├── Analytics.tsx        # Analytics and reporting
│   │   ├── Settings.tsx         # User settings and preferences
│   │   └── Login.tsx           # Authentication page
│   ├── App.tsx                  # Main application component
│   └── index.tsx               # Application entry point
├── public/                      # Static assets
├── build/                       # Production build output
└── package.json                # Dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the application directory:
   ```bash
   cd ngep-web-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Login Credentials

For demo purposes, you can login with:
- **Email**: Any valid email format (e.g., `admin@example.com`)
- **Password**: Any password with 6+ characters (e.g., `password123`)

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (not recommended)

## Features in Detail

### Authentication
- Persistent login state using localStorage
- Automatic route protection
- User context management across the application

### Dashboard
- Overview cards with trending indicators
- System health monitoring with progress bars
- Recent activities with status badges
- Quick action chips for common tasks

### Data Management
- Full CRUD operations on user records
- Sortable and filterable data grid
- Inline editing capabilities
- Bulk operations with checkboxes
- Modal forms for adding/editing records

### Analytics
- Key metrics with trend analysis
- Visual progress indicators
- Traffic source breakdown
- Interactive chart placeholders (ready for real data integration)

### Settings
- Tabbed interface for different setting categories
- Form validation and state management
- Switch toggles for preferences
- Success notifications for saved changes

## Security Features

- Client-side route protection
- Session timeout configuration
- Two-factor authentication (UI ready)
- Password expiry settings

## Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## Future Enhancements

- Backend API integration
- Real-time data updates
- Advanced chart library integration
- User role-based permissions
- Email notification system
- Advanced search and filtering
- Data export in multiple formats
- Multi-language internationalization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React and Material-UI**