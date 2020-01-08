import {Injectable} from '@angular/core';
export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}
export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const HomeNavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          // {
          //   id: 'Clients',
          //   title: 'Clients',
          //   type: 'collapse',
          //   icon: 'feather icon-user',
          //   // url: '/dashboard/default',
          // },
          {
            id: 'Campaigns',
            title: 'Campaigns',
            type: 'collapse',
            icon: 'feather icon-home',
            // url: '/dashboard/default',
            children: [
              {
                id: 'All',
                title: 'All',
                type: 'collapse',
                // icon: 'feather icon-home',
                url: '/dashboard',
              },
              {
                id: 'Leads',
                title: 'Leads',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Opportunities',
                title: 'Opportunities',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard',
              }
            ]
            
          },
      ]
  },
]




const SettingsNavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          // {
          //   id: 'Clients',
          //   title: 'Clients',
          //   type: 'collapse',
          //   icon: 'feather icon-user',
          //   // url: '/dashboard/default',
          // },
          {
            id: ':Email Credientials',
            title: 'Email Credientials',
            type: 'item',
            icon: 'feather icon-mail',
             url: '/settings',
            children: [ ]
            
          },
          // {
          //   id: ':Linkedin',
          //   title: 'Linkedin',
          //   type: 'item',
          //   icon: 'feather icon-home',
          //   // url: '/dashboard/sale',
          //   children: [ ]
            
          // },
          // {
          //   id: ':Auto Withdrawals',
          //   title: 'Auto Withdrawals',
          //   type: 'item',
          //   icon: 'feather icon-home',
          //   // url: '/dashboard/crm',
          //   children: [ ]
            
          // },
          // {
          //   id: ':Billing',
          //   title: 'Billing',
          //   type: 'item',
          //   icon: 'feather icon-file',
          //   // url: '/dashboard/analytics',
          //   children: [ ]
            
          // },
          // {
          //   id: ':Signout',
          //   title: 'Signout',
          //   type: 'item',
          //   icon: 'feather icon-log-out',
          //   // url: '/dashboard/project',
          //   children: [ ]
            
          // },
      ]
  },
]


const CalendarNavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          // {
          //   id: 'Clients',
          //   title: 'Clients',
          //   type: 'collapse',
          //   icon: 'feather icon-user',
          //   // url: '/dashboard/default',
          // },
          {
            id: 'Calendar',
            title: 'Calendar',
            type: 'collapse',
            icon: 'feather icon-calendar',
            // url: '/dashboard/default',
            children: []
            
          },
      ]
  },
]

const CampaignNavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          // {
          //   id: 'Clients',
          //   title: 'Clients',
          //   type: 'collapse',
          //   icon: 'feather icon-user',
          //   // url: '/dashboard/default',
          // },
          {
            id: 'Campaign',
            title: 'Campaign',
            type: 'collapse',
            icon: 'feather icon-bar-chart',
          //  url: '/dashboard/default',
            children: []
            
          },
      ]
  },
]

const ProspectsNavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          // {
          //   id: 'Clients',
          //   title: 'Clients',
          //   type: 'collapse',
          //   icon: 'feather icon-user',
          //   // url: '/dashboard/default',
          // },
          {
            id: 'Prospects',
            title: 'Prospects',
            type: 'collapse',
            icon: 'feather icon-book',
            // url: '/dashboard/default',
            children: []
            
          },
      ]
  },
]

const InboxNavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          // {
          //   id: 'Clients',
          //   title: 'Clients',
          //   type: 'collapse',
          //   icon: 'feather icon-user',
          //   // url: '/dashboard/default',
          // },
          {
            id: 'Inbox',
            title: 'Inbox',
            type: 'collapse',
            icon: 'feather icon-inbox',
            // url: '/dashboard/default',
            children: []
            
          },
      ]
  },
]




let ActivityNavigation = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          {
            id: 'Activity',
            title: 'Activity',
            type: 'collapse',
            icon: 'feather icon-activity',
            // url: '/dashboard/default',
            children: [
              {
                id: 'All',
                title: 'All',
                type: 'collapse',
                // icon: 'feather icon-home',
                url: '/dashboard',
              },
              {
                id: 'Viewed',
                title: 'Viewed',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/sale',
              },
              {
                id: 'Connection Sent',
                title: 'ConnectionSent',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Connected',
                title: 'Connected',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Message Sent',
                title: 'Message Sent',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Replies',
                title: 'Replies',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Email sent',
                title: 'Email sent',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Email Opened',
                title: 'Email Opened',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Email Clicked',
                title: 'Email Clicked',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              },
              {
                id: 'Email Replied',
                title: 'Email Replied',
                type: 'collapse',
                // icon: 'feather icon-home',
                // url: '/dashboard/default',
              }
            ]
          }
      ]
  },
];





let NavigationItems = []
let NavigationItems1 = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            // type: 'collapse',
            icon: 'feather icon-home',
            url: '/dashboard/default',
          },
          {
            id: 'Clients',
            title: 'Clients',
            type: 'item',
            icon: 'feather icon-user',
            // url: '/dashboard/default',
            children: []
          },
          {
            id: 'Filter',
            title: 'Filter',
            type: 'item',
            icon: 'feather icon-filter',
            // url: '/dashboard/default',
            children: [
              // {
              //   id: 'Default',
              //   title: 'Default',
              //   type: 'collapse',
              //   // icon: 'feather icon-home',
              //   url: '/dashboard',
              // },
              // {
              //   id: 'Sales',
              //   title: 'Sales',
              //   type: 'collapse',
              //   // icon: 'feather icon-home',
              //   // url: '/dashboard/sale',
              // },
              // {
              //   id: 'CRM',
              //   title: 'CRM',
              //   type: 'collapse',
              //   // icon: 'feather icon-home',
              //   // url: '/dashboard/default',
              // },
              // {
              //   id: 'Analytics',
              //   title: 'Analytics',
              //   type: 'collapse',
              //   // icon: 'feather icon-home',
              //   // url: '/dashboard/default',
              // },
              // {
              //   id: 'Project',
              //   title: 'Project',
              //   type: 'collapse',
              //   // icon: 'feather icon-home',
              //   // url: '/dashboard/default',
              // }
            ]
          }
      ]
  },
  // {
  //         id: 'page-layouts',
  //         title: 'Page Layouts',
  //         type: 'collapse',
  //         icon: 'feather icon-layout',
  //         children: [
  //           {
  //             id: 'vertical',
  //             title: 'Vertical',
  //             type: 'collapse',
  //             children: [
  //               {
  //                 id: 'v-static',
  //                 title: 'Static',
  //                 type: 'item',
  //                 url: '/layout/static',
  //                 target: true,
  //               },
  //               {
  //                 id: 'v-fixed',
  //                 title: 'Fixed',
  //                 type: 'item',
  //                 url: '/layout/fixed',
  //                 target: true,
  //               },
  //               {
  //                 id: 'v-nav-fixed',
  //                 title: 'Navbar Fixed',
  //                 type: 'item',
  //                 url: '/layout/nav-fixed',
  //                 target: true,
  //               },
  //               {
  //                 id: 'v-collapse-menu',
  //                 title: 'Collapse Menu',
  //                 type: 'item',
  //                 url: '/layout/collapse-menu',
  //                 target: true,
  //               },
  //               {
  //                 id: 'v-rtl',
  //                 title: 'Vertical RTL',
  //                 type: 'item',
  //                 url: '/layout/vertical-rtl',
  //                 target: true
  //               }
  //             ]
  //           },
  //           {
  //             id: 'horizontal',
  //             title: 'Horizontal',
  //             type: 'item',
  //             url: '/layout/horizontal',
  //             target: true
  //           },
  //           {
  //             id: 'horizontal-l2',
  //             title: 'Horizontal v2',
  //             type: 'item',
  //             url: '/layout/horizontal-l2',
  //             target: true
  //           },
  //           {
  //             id: 'horizontal-rtl',
  //             title: 'Horizontal RTL',
  //             type: 'item',
  //             url: '/layout/horizontal-rtl',
  //             target: true
  //           },
  //           {
  //             id: 'box-layout',
  //             title: 'Box Layout',
  //             type: 'item',
  //             url: '/layout/box',
  //             target: true
  //           },
  //           {
  //             id: 'light-layout',
  //             title: 'Light Layout',
  //             type: 'item',
  //             url: '/layout/light',
  //             target: true
  //           },
  //           {
  //             id: 'dark-layout',
  //             title: 'Dark Layout',
  //             type: 'item',
  //             url: '/layout/dark',
  //             target: true,
  //             badge: {
  //               title: 'Hot',
  //               type: 'badge-danger'
  //             }
  //           }
  //         ]
  //       },
  //   children: [
  //     {
  //       id: 'dashboard',
  //       title: 'Dashboard',
  //       type: 'collapse',
  //       icon: 'feather icon-home',
  //       children: [
  //         {
  //           id: 'default',
  //           title: 'Default',
  //           type: 'item',
  //           url: '/dashboard/default'
  //         },
  //         {
  //           id: 'sale',
  //           title: 'Sales',
  //           type: 'item',
  //           url: '/dashboard/sale'
  //         },
  //         {
  //           id: 'crm',
  //           title: 'CRM',
  //           type: 'item',
  //           url: '/dashboard/crm'
  //         },
  //         {
  //           id: 'analytics',
  //           title: 'Analytics',
  //           type: 'item',
  //           url: '/dashboard/analytics'
  //         },
  //         {
  //           id: 'project',
  //           title: 'Project',
  //           type: 'item',
  //           url: '/dashboard/project'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'page-layouts',
  //       title: 'Page Layouts',
  //       type: 'collapse',
  //       icon: 'feather icon-layout',
  //       children: [
  //         {
  //           id: 'vertical',
  //           title: 'Vertical',
  //           type: 'collapse',
  //           children: [
  //             {
  //               id: 'v-static',
  //               title: 'Static',
  //               type: 'item',
  //               url: '/layout/static',
  //               target: true,
  //             },
  //             {
  //               id: 'v-fixed',
  //               title: 'Fixed',
  //               type: 'item',
  //               url: '/layout/fixed',
  //               target: true,
  //             },
  //             {
  //               id: 'v-nav-fixed',
  //               title: 'Navbar Fixed',
  //               type: 'item',
  //               url: '/layout/nav-fixed',
  //               target: true,
  //             },
  //             {
  //               id: 'v-collapse-menu',
  //               title: 'Collapse Menu',
  //               type: 'item',
  //               url: '/layout/collapse-menu',
  //               target: true,
  //             },
  //             {
  //               id: 'v-rtl',
  //               title: 'Vertical RTL',
  //               type: 'item',
  //               url: '/layout/vertical-rtl',
  //               target: true
  //             }
  //           ]
  //         },
  //         {
  //           id: 'horizontal',
  //           title: 'Horizontal',
  //           type: 'item',
  //           url: '/layout/horizontal',
  //           target: true
  //         },
  //         {
  //           id: 'horizontal-l2',
  //           title: 'Horizontal v2',
  //           type: 'item',
  //           url: '/layout/horizontal-l2',
  //           target: true
  //         },
  //         {
  //           id: 'horizontal-rtl',
  //           title: 'Horizontal RTL',
  //           type: 'item',
  //           url: '/layout/horizontal-rtl',
  //           target: true
  //         },
  //         {
  //           id: 'box-layout',
  //           title: 'Box Layout',
  //           type: 'item',
  //           url: '/layout/box',
  //           target: true
  //         },
  //         {
  //           id: 'light-layout',
  //           title: 'Light Layout',
  //           type: 'item',
  //           url: '/layout/light',
  //           target: true
  //         },
  //         {
  //           id: 'dark-layout',
  //           title: 'Dark Layout',
  //           type: 'item',
  //           url: '/layout/dark',
  //           target: true,
  //           badge: {
  //             title: 'Hot',
  //             type: 'badge-danger'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       id: 'widget',
  //       title: 'Widget',
  //       type: 'collapse',
  //       icon: 'feather icon-layers',
  //       badge: {
  //         title: '100+',
  //         type: 'badge-success'
  //       },
  //       children: [
  //         {
  //           id: 'statistic',
  //           title: 'Statistic',
  //           type: 'item',
  //           url: '/widget/statistic'
  //         },
  //         {
  //           id: 'data',
  //           title: 'Data',
  //           type: 'item',
  //           url: '/widget/data'
  //         },
  //         {
  //           id: 'chart',
  //           title: 'Chart',
  //           type: 'item',
  //           url: '/widget/chart'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'users',
  //       title: 'User',
  //       type: 'collapse',
  //       icon: 'feather icon-users',
  //       children: [
  //         {
  //           id: 'profile',
  //           title: 'Profile',
  //           type: 'item',
  //           url: '/users/profile',
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'cards',
  //           title: 'User Card',
  //           type: 'item',
  //           url: '/users/card'
  //         },
  //         {
  //           id: 'list',
  //           title: 'User List',
  //           type: 'item',
  //           url: '/users/list'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'admin-panel',
  //   title: 'Admin Panel',
  //   type: 'group',
  //   icon: 'feather icon-monitor',
  //   children: [
  //     {
  //       id: 'hospital',
  //       title: 'Hospital',
  //       type: 'collapse',
  //       icon: 'feather icon-activity',
  //       children: [
  //         {
  //           id: 'hosp-dashboard',
  //           title: 'Dashboard',
  //           type: 'item',
  //           url: '/hospital/hosp-dashboard'
  //         },
  //         {
  //           id: 'hosp-department',
  //           title: 'Department',
  //           type: 'item',
  //           url: '/hospital/hosp-department'
  //         },
  //         {
  //           id: 'hosp-doctor',
  //           title: 'Doctor',
  //           type: 'item',
  //           url: '/hospital/hosp-doctor'
  //         },
  //         {
  //           id: 'hosp-patient',
  //           title: 'Patient',
  //           type: 'item',
  //           url: '/hospital/hosp-patient'
  //         },
  //         {
  //           id: 'hosp-nurse',
  //           title: 'Nurse',
  //           type: 'item',
  //           url: '/hospital/hosp-nurse'
  //         },
  //         {
  //           id: 'hosp-pharmacist',
  //           title: 'Pharmacist',
  //           type: 'item',
  //           url: '/hospital/hosp-pharmacist'
  //         },
  //         {
  //           id: 'hosp-laboratory',
  //           title: 'Laboratory',
  //           type: 'item',
  //           url: '/hospital/hosp-laboratory'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'project-crm',
  //       title: 'Project & CRM',
  //       type: 'collapse',
  //       icon: 'feather icon-package',
  //       children: [
  //         {
  //           id: 'pc-dashboard',
  //           title: 'Dashboard',
  //           type: 'item',
  //           url: '/project-crm/pc-dashboard'
  //         },
  //         {
  //           id: 'pc-customers',
  //           title: 'Customers',
  //           type: 'item',
  //           url: '/project-crm/pc-customers'
  //         },
  //         {
  //           id: 'pc-project',
  //           title: 'Project',
  //           type: 'item',
  //           url: '/project-crm/pc-project'
  //         },
  //         {
  //           id: 'pc-task',
  //           title: 'Task',
  //           type: 'item',
  //           url: '/project-crm/pc-task'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'membership',
  //       title: 'Membership',
  //       type: 'collapse',
  //       icon: 'feather icon-user-check',
  //       children: [
  //         {
  //           id: 'mshp-dashboard',
  //           title: 'Dashboard',
  //           type: 'item',
  //           url: '/membership/mshp-dashboard'
  //         },
  //         {
  //           id: 'mshp-email',
  //           title: 'Email Templates',
  //           type: 'item',
  //           url: '/membership/mshp-email'
  //         },
  //         {
  //           id: 'mshp-country',
  //           title: 'Country',
  //           type: 'item',
  //           url: '/membership/mshp-country'
  //         },
  //         {
  //           id: 'mshp-coupons',
  //           title: 'Coupons',
  //           type: 'item',
  //           url: '/membership/mshp-coupons'
  //         },
  //         {
  //           id: 'mshp-newsletter',
  //           title: 'Newsletter',
  //           type: 'item',
  //           url: '/membership/mshp-newsletter'
  //         },
  //         {
  //           id: 'mshp-user',
  //           title: 'User',
  //           type: 'item',
  //           url: '/membership/mshp-user'
  //         },
  //         {
  //           id: 'mshp-membership',
  //           title: 'Membership',
  //           type: 'item',
  //           url: '/membership/mshp-membership'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'helpdesk',
  //       title: 'Helpdesk',
  //       type: 'collapse',
  //       icon: 'feather icon-help-circle',
  //       children: [
  //         {
  //           id: 'hd-dashboard',
  //           title: 'Helpdesk Dashboard',
  //           type: 'item',
  //           url: '/helpdesk/hd-dashboard'
  //         },
  //         {
  //           id: 'hd-ticket',
  //           title: 'Create Ticket',
  //           type: 'item',
  //           url: '/helpdesk/hd-ticket'
  //         },
  //         {
  //           id: 'hd-customer',
  //           title: 'Ticket List',
  //           type: 'item',
  //           url: '/helpdesk/hd-customer'
  //         },
  //         {
  //           id: 'hd-customer-detail',
  //           title: 'Ticket Detail',
  //           type: 'item',
  //           url: '/helpdesk/hd-customer-detail'
  //         },
  //         {
  //           id: 'hd-customer-list',
  //           title: 'Customer',
  //           type: 'item',
  //           url: '/helpdesk/hd-customer-list'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'school',
  //       title: 'School',
  //       type: 'collapse',
  //       icon: 'feather icon-book',
  //       badge: {
  //         title: 'New',
  //         type: 'badge-success'
  //       },
  //       children: [
  //         {
  //           id: 'sch-dashboard',
  //           title: 'Dashboard',
  //           type: 'item',
  //           url: '/school/sch-dashboard'
  //         },
  //         {
  //           id: 'sch-student',
  //           title: 'Student',
  //           type: 'item',
  //           url: '/school/sch-student'
  //         },
  //         {
  //           id: 'sch-parents',
  //           title: 'Parents',
  //           type: 'item',
  //           url: '/school/sch-parents'
  //         },
  //         {
  //           id: 'sch-teacher',
  //           title: 'Teacher',
  //           type: 'item',
  //           url: '/school/sch-teacher'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'sis',
  //       title: 'SIS',
  //       type: 'collapse',
  //       icon: 'feather icon-book',
  //       children: [
  //         {
  //           id: 'sis-dashboard',
  //           title: 'Dashboard',
  //           type: 'item',
  //           url: '/sis/sis-dashboard'
  //         },
  //         {
  //           id: 'sis-leave',
  //           title: 'Leave',
  //           type: 'item',
  //           url: '/sis/sis-leave'
  //         },
  //         {
  //           id: 'sis-evaluation',
  //           title: 'Evaluation',
  //           type: 'item',
  //           url: '/sis/sis-evaluation'
  //         },
  //         {
  //           id: 'sis-event',
  //           title: 'Event',
  //           type: 'item',
  //           url: '/sis/sis-event'
  //         },
  //         {
  //           id: 'sis-circular',
  //           title: 'Circular',
  //           type: 'item',
  //           url: '/sis/sis-circular'
  //         },
  //         {
  //           id: 'sis-course',
  //           title: 'Course',
  //           type: 'item',
  //           url: '/sis/sis-course'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'crypto',
  //       title: 'Crypto',
  //       type: 'collapse',
  //       icon: 'feather icon-target',
  //       children: [
  //         {
  //           id: 'cp-dashboard',
  //           title: 'Dashboard',
  //           type: 'item',
  //           url: '/crypto/cp-dashboard'
  //         },
  //         {
  //           id: 'cp-exchange',
  //           title: 'Exchange',
  //           type: 'item',
  //           url: '/crypto/cp-exchange'
  //         },
  //         {
  //           id: 'cp-wallet',
  //           title: 'Wallet',
  //           type: 'item',
  //           url: '/crypto/cp-wallet'
  //         },
  //         {
  //           id: 'cp-transactions',
  //           title: 'Transactions',
  //           type: 'item',
  //           url: '/crypto/cp-transactions'
  //         },
  //         {
  //           id: 'cp-history',
  //           title: 'History',
  //           type: 'item',
  //           url: '/crypto/cp-history'
  //         },
  //         {
  //           id: 'cp-trading',
  //           title: 'Trading',
  //           type: 'item',
  //           url: '/crypto/cp-trading'
  //         },
  //         {
  //           id: 'cp-coin',
  //           title: 'Initial Coin',
  //           type: 'item',
  //           url: '/crypto/cp-coin'
  //         },
  //         {
  //           id: 'cp-ico',
  //           title: 'Ico Listing',
  //           type: 'item',
  //           url: '/crypto/cp-ico'
  //         }
  //       ]
  //     },
  //     {
  //       id: 'ecommerce',
  //       title: 'Ecommerce',
  //       type: 'collapse',
  //       icon: 'feather icon-shopping-cart',
  //       children: [
  //         {
  //           id: 'ecomm-product',
  //           title: 'Product',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-product'
  //         },
  //         {
  //           id: 'ecomm-product-details',
  //           title: 'Product Details',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-product-details'
  //         },
  //         {
  //           id: 'ecomm-order',
  //           title: 'Order',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-order'
  //         },
  //         {
  //           id: 'ecomm-checkout',
  //           title: 'Checkout',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-checkout'
  //         },
  //         {
  //           id: 'ecomm-cart',
  //           title: 'Shopping Cart',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-cart'
  //         },
  //         {
  //           id: 'ecomm-customer',
  //           title: 'Customers',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-customer'
  //         },
  //         {
  //           id: 'ecomm-seller',
  //           title: 'Sellers',
  //           type: 'item',
  //           url: '/ecommerce/ecomm-seller'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'ui-element',
  //   title: 'UI ELEMENT',
  //   type: 'group',
  //   icon: 'feather icon-layers',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Basic',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           type: 'item',
  //           url: '/basic/alert'
  //         },
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/basic/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/basic/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumbs & Pagination',
  //           type: 'item',
  //           url: '/basic/breadcrumb-paging'
  //         },
  //         {
  //           id: 'cards',
  //           title: 'Cards',
  //           type: 'item',
  //           url: '/basic/cards'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/basic/collapse'
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           type: 'item',
  //           url: '/basic/carousel'
  //         },
  //         {
  //           id: 'grid-system',
  //           title: 'Grid System',
  //           type: 'item',
  //           url: '/basic/grid-system'
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           type: 'item',
  //           url: '/basic/progress'
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           type: 'item',
  //           url: '/basic/modal'
  //         },
  //         {
  //           id: 'spinner',
  //           title: 'Spinner',
  //           type: 'item',
  //           url: '/basic/spinner'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/basic/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/basic/typography'
  //         },
  //         {
  //           id: 'tooltip-popovers',
  //           title: 'Tooltip & Popovers',
  //           type: 'item',
  //           url: '/basic/tooltip-popovers'
  //         },
  //         {
  //           id: 'toasts',
  //           title: 'Toasts',
  //           type: 'item',
  //           url: '/basic/toasts'
  //         },
  //         {
  //           id: 'other',
  //           title: 'Other',
  //           type: 'item',
  //           url: '/basic/other'
  //         }
];


@Injectable()
export class NavigationItem {
  public get(message) {    
    if(message.text == 'home') {
      NavigationItems = NavigationItems1
      return NavigationItems;
    } else if(message.text == 'task') {
      NavigationItems = HomeNavigationItems
      return NavigationItems; 
    } else if((message.text == 'activity')) {
      NavigationItems = ActivityNavigation
      return NavigationItems;
    } else if((message.text == 'calendar')) {
      NavigationItems = CalendarNavigationItems
      return NavigationItems;
    } else if((message.text == 'campaigns')) {
      NavigationItems = CampaignNavigationItems
      return NavigationItems;
    } else if((message.text == 'prospects')) {
      NavigationItems = ProspectsNavigationItems
      return NavigationItems;
    }else if((message.text == 'inbox')) {
      NavigationItems = InboxNavigationItems
      return NavigationItems;
    }else if((message.text == 'settings')) {
      NavigationItems = SettingsNavigationItems
      return NavigationItems;
    }
    else {
      NavigationItems = NavigationItems1;
      // return NavigationItems; 
      return []; 
    }
  }
}
    
    
  
  

