const consignmentPage = [
  {
    title: 'Overview',
    text: {
      p1: `The client offers a consignment service to their customers in the space of trading cards and collectibles. 
        This entails the auctioning of said items on the customers behalf. 
        The service demanded an interface that allows customers to view the status and auction results of their consignments, along with the ability to view and access the resulting sales balance.`,
      p2: `The primary purpose of this application is to enhance the user experience for the customers of the consignment service, and to improve efficiency of user management and interaction for the application administrator.`,
      p3: `The application was built around eBay’s developer program, and uses its apis to automate the collection and upkeep of data. This data of listed items is then displayed for both the service administrator and end users.`,
      p4: `Finally the application calculates the sum of final sale prices along with the service fees collected, an doffers the users a feature to request and keep record of payouts.`
    },  
    img: '/images/design.png'
  },
  {
    title: 'Requirements',
    text: {
      p1: `The overall scope of this project was to built a User Portal with a clean dashboard that allows clients to effortlessly find and view the status and details of their consigned items throughout the various auction stages.`,
      p2: `The application needs to automatically track the auction process and selling status of the items listed on eBay and calculate the account balance for each user.`, 
      p3: `Endusers also need to be able to track their total balance as well as the payouts of individual listings. The users need to have the ability to request balance payouts.`,
      p4: `Finally the application also demands an admin dashboard, to manage Users, view and manage consigned items, and manage user payout and account balances.`
    },
    img: '/images/dashboards-ui.png'
  },
  {
    title: 'Architecture',
    text:{ 
      p1: `The application is broken down into two parts: the user application, and the admin application. Both application are built and deployed in a similar fashion, but perform different functions.`,
      p2: `The user application delivers the user’s consignment data to the end users and allows the users to make payout requests.`,
      p3: `The admin application does frequent api calls to the ebay developer platform to retrieve and update data, and store this data in a serverless instance of Mongo DB. The admin application is also designed to handle user account management.`,
      p4: `Both application are built with a React framework for the frontend and run on a NodeJs environment with an express Server. They are deployed in AWS VPC with the Elastic Beanstalk service. The deployment includes load balancer and several EC2 instances to ensure stable performance and proper application scaling.`,
    },
    img: '/images/app-architecture.png'
  },
  {
    title: 'Design',
    text: {
      p1: `In the process of designing this application I primarily had the two principles of simplicity and functionality in mind. Hence, I designed an user interface, that is simple to navigate, and focuses on the main functionalitis of finding listings and the account balance.`,   
      p2: `I decided to use the React framework for the ui, because it allowed me to build components that dynamically render the specific content for each user. In order to make the ui completely responsive for all device sizes, I made use of conditional rendering of alternative elements, along with css libraries for responsive and efficient styling.`, 
      p3: `After finishing the user dashboard, I took a similar approach for the design of the admin application. I followed the same principles of simplicity and functionality, in order to create an interface that makes it easy to keep oversight and manage the individual user accounts.`,
      p4: ``,
    },
    img: '/images/dp-cons-overview.png'
  },
  {
    title: 'Data Table',
    text: {
      p1: `The dashboard has several tables that sort the data into different categories, based on the auction state of respective items, plus a summary table. The tables have multiple features that enhance its usability.`,
      p2: `To compress the information and enhance view-ability the items are displayed in collapsible accordions, and the tables are paginated, with a truncated selection element. To view the details of a specific item, each element can expand and allows the user to inspect detailed information along with the item image.`, 
      p3: `The table is sortable by several variables, such as price or time left in the auction. Additionally the table is completely searchable to let users quickly find specific items.`,
      p4: `For mobile devices I designed an alternate layout, that seamlessly transitions and makes it easy to navigate the tables on smaller screens.`,
    },
    img: '/images/consignment_table.png'
  },
  {
    title: 'Balance',
    text: {
      p1: `The balance feature is built to display all details relating to the users account balance. It summarizes total sales, total payouts after consignment fee deductions, total withdrawals as well as current account balance.`,
      p2: `Next to the balance overview are two elements that detail all account transactions. One table breaks down all sale transactions with sale price and payout. The other table lists the Cashout transaction history.`, 
      p3: `All transactions, payouts and balances are automatically calculated by the application backend and stored in the database. The design ensures persistent data, transaction transparency and an effortless understanding of the payout breakdown, for the enduser as well as the application administrator.`,
      p4: ``,
    },
    img: '/images/balance.png'
  },
  {
    title: 'Cashouts',
    text: {
      p1: `The Cash out feature, is very straight forward and simple to use. It allows users to see the available balance and make cash out requests in the form they prefer.`,
      p2: `The feature is programmed to only allow users to make requests that don’t exceed their account balance. If the user made a mistake or changed their mind, they can simply cancel pending requests. Additionally they have the option to attach a comment to the request.`, 
      p3: `Once the request is made it shows up on the admin dashboard, where the administrator can confirm the request, once it is processed, or cancel it if necessary.`,
      p4: `Once the cash out is confirmed it will immediately reflect in the user's account balance.`,
    },
    img: '/images/cashout.png'
  },
  {
    title: 'Admin',
    text: {
      p1: `The admin dashboard is a comprehensive tool, that gives the admins complete overview over all listing data, and complete control over all user accounts.`,
      p2: `The application displays all listings as well as user specific listings in various tables that are designed in the same fashion as the user application. This allows the admins to quickly gain oversight of the status of the auction process.`,
      p3: `All users are accessible in the users management feature, which allows admins to view  and manage each users account details. By assigning a key to the user, the user account gets automatically connected to the correct listing data of the user. The admin also has the ability to manage the users transaction history by adding and removing payout transaction records.`,
      p4: `The admin dashboard will show all payout requests made by users, that can be confirmed or canceled to be then reflected in the user account. `,
    },
    img: '/images/admin.png'
  },
  
];

module.exports = consignmentPage;