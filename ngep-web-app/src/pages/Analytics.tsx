import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Paper,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  BarChart,
  PieChart,
} from '@mui/icons-material';

const Analytics: React.FC = () => {
  const metrics = [
    { label: 'Page Views', value: '124,892', change: '+12.5%', trending: 'up' },
    { label: 'Unique Visitors', value: '45,231', change: '+8.3%', trending: 'up' },
    { label: 'Bounce Rate', value: '2.4%', change: '-1.2%', trending: 'down' },
    { label: 'Conversion Rate', value: '4.7%', change: '+0.8%', trending: 'up' },
  ];

  const topPages = [
    { page: '/dashboard', views: 12543, percentage: 35 },
    { page: '/data', views: 8721, percentage: 24 },
    { page: '/analytics', views: 6432, percentage: 18 },
    { page: '/settings', views: 4321, percentage: 12 },
    { page: '/login', views: 3987, percentage: 11 },
  ];

  const trafficSources = [
    { source: 'Direct', percentage: 45, color: '#1976d2' },
    { source: 'Search Engines', percentage: 32, color: '#dc004e' },
    { source: 'Social Media', percentage: 15, color: '#ff9800' },
    { source: 'Referrals', percentage: 8, color: '#4caf50' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Track and analyze your application performance and user behavior.
      </Typography>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom variant="body2">
                      {metric.label}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {metric.value}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      {metric.trending === 'up' ? (
                        <TrendingUp sx={{ color: 'success.main', mr: 0.5 }} />
                      ) : (
                        <TrendingDown sx={{ color: 'success.main', mr: 0.5 }} />
                      )}
                      <Typography variant="body2" color="success.main">
                        {metric.change}
                      </Typography>
                    </Box>
                  </Box>
                  <BarChart sx={{ color: 'primary.main', fontSize: 40, opacity: 0.7 }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Top Pages */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Top Pages
              </Typography>
              <List disablePadding>
                {topPages.map((page, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText
                        primary={page.page}
                        secondary={`${page.views.toLocaleString()} views`}
                      />
                      <Box sx={{ width: 100, ml: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={page.percentage}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                          {page.percentage}%
                        </Typography>
                      </Box>
                    </ListItem>
                    {index < topPages.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Traffic Sources */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Traffic Sources
              </Typography>
              <Box sx={{ position: 'relative', height: 200, mb: 2 }}>
                {/* Simplified pie chart representation */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    background: `conic-gradient(
                      #1976d2 0% 45%,
                      #dc004e 45% 77%,
                      #ff9800 77% 92%,
                      #4caf50 92% 100%
                    )`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: 'background.paper',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <PieChart sx={{ color: 'primary.main' }} />
                  </Box>
                </Box>
              </Box>
              <List disablePadding>
                {trafficSources.map((source, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: source.color,
                        mr: 2,
                      }}
                    />
                    <ListItemText
                      primary={source.source}
                      secondary={`${source.percentage}%`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Time Series Chart Placeholder */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                User Activity Over Time
              </Typography>
              <Paper
                sx={{
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.50',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <BarChart sx={{ fontSize: 60, color: 'primary.main', opacity: 0.5 }} />
                  <Typography variant="h6" color="text.secondary">
                    Interactive Chart Placeholder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This would contain a real-time chart showing user activity trends
                  </Typography>
                </Box>
              </Paper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;