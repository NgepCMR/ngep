import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  People,
  Storage,
  Analytics,
  Assignment,
  Warning,
  CheckCircle,
} from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trending: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, trending, icon, color }) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography color="textSecondary" gutterBottom variant="body2">
            {title}
          </Typography>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
            {trending === 'up' ? (
              <TrendingUp sx={{ color: 'success.main', mr: 0.5 }} />
            ) : (
              <TrendingDown sx={{ color: 'error.main', mr: 0.5 }} />
            )}
            <Typography 
              variant="body2" 
              color={trending === 'up' ? 'success.main' : 'error.main'}
            >
              {change}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ color: color, opacity: 0.7 }}>
          {icon}
        </Box>
      </Box>
    </CardContent>
  </Card>
);

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      change: '+12.5%',
      trending: 'up' as const,
      icon: <People fontSize="large" />,
      color: 'primary.main',
    },
    {
      title: 'Data Records',
      value: '15.2K',
      change: '+8.2%',
      trending: 'up' as const,
      icon: <Storage fontSize="large" />,
      color: 'secondary.main',
    },
    {
      title: 'Active Sessions',
      value: '431',
      change: '-2.1%',
      trending: 'down' as const,
      icon: <Analytics fontSize="large" />,
      color: 'warning.main',
    },
    {
      title: 'Completed Tasks',
      value: '89%',
      change: '+5.4%',
      trending: 'up' as const,
      icon: <Assignment fontSize="large" />,
      color: 'success.main',
    },
  ];

  const recentActivities = [
    { id: 1, title: 'Data backup completed', time: '2 hours ago', status: 'success' },
    { id: 2, title: 'New user registration', time: '3 hours ago', status: 'info' },
    { id: 3, title: 'System update available', time: '5 hours ago', status: 'warning' },
    { id: 4, title: 'Analytics report generated', time: '6 hours ago', status: 'success' },
    { id: 5, title: 'Storage space low', time: '1 day ago', status: 'error' },
  ];

  const systemHealth = [
    { name: 'CPU Usage', value: 45, color: 'primary' },
    { name: 'Memory Usage', value: 72, color: 'warning' },
    { name: 'Disk Usage', value: 28, color: 'success' },
    { name: 'Network Load', value: 85, color: 'error' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Welcome to the NGEP dashboard. Here's an overview of your system status.
      </Typography>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* System Health */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Health
              </Typography>
              {systemHealth.map((item, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="body2">{item.value}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={item.value}
                    color={item.color as any}
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <List disablePadding>
                {recentActivities.map((activity) => (
                  <ListItem key={activity.id} divider>
                    <ListItemIcon>
                      {activity.status === 'success' && <CheckCircle color="success" />}
                      {activity.status === 'warning' && <Warning color="warning" />}
                      {activity.status === 'error' && <Warning color="error" />}
                      {activity.status === 'info' && <Analytics color="primary" />}
                    </ListItemIcon>
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.time}
                    />
                    <Chip
                      label={activity.status}
                      size="small"
                      color={
                        activity.status === 'success' ? 'success' :
                        activity.status === 'warning' ? 'warning' :
                        activity.status === 'error' ? 'error' : 'primary'
                      }
                      variant="outlined"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Chip
                label="Generate Report"
                icon={<Analytics />}
                onClick={() => console.log('Generate report')}
                clickable
                color="primary"
              />
              <Chip
                label="Backup Data"
                icon={<Storage />}
                onClick={() => console.log('Backup data')}
                clickable
                color="secondary"
              />
              <Chip
                label="View Users"
                icon={<People />}
                onClick={() => console.log('View users')}
                clickable
                color="primary"
              />
              <Chip
                label="System Check"
                icon={<CheckCircle />}
                onClick={() => console.log('System check')}
                clickable
                color="success"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;