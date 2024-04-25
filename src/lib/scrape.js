const scraper = [
  {
    title: 'Overview',
    text: {
      p1: `The retail market of trading cards and collectibles has been experiencing extremely high price volatility in recent years, which made it very difficult to consistently maintain competitive prices. `,
      p2: `An initial barebones solution to this problem was a web-scraping script that collected prices from various retailers and stored this data in spreadsheets. This initial solution allowed to collect and track price changes, but lacked any form of a user friendly package.`,
      p3: `The client was in demand of an improved solution that can be used on various machines and takes no technical knowledge to use.`,
      p4: `Hence, I built an application with the Electron platform and a React frontend to meet the requirements. The application runs on both Mac and Windows machines, with a Dashboard that features automated web scraping, simple data input and editing, export of price lists to csv and pdf formats, as well as the back up and recovery of data.`,
    },
    img: '/images/scrape_dash.png'
  },
  {
    title: 'Design',
    text: {
      p1: `The design process of this application was driven by the principles of simplicity and usability, along with the goal to ship a working application as soon as possible.`,
      p2: `The electron platform was an easy choice, because it is a simple solution for building multi-platform desktop applications with JavaScript HTML and CSS.`,
      p3: `I built the frontend with React, because of its functionality and ability to maintain states. For the styling I relied on the Bootstrap library as well as SCSS.`,
      p4: `The application design resulted in a clean and simple dashboard, that stores data in local json files and displays the scraped price data in searchable tables. Additionally I added a help feature that has detailed documentation on how to operate the application.`,
    },
    img: '/images/scrape_design.png'
  },
  {
    title: 'Data Entry',
    text: {
      p1: `The initial step for the price data collection process requires data entry. For each individual item the associated urls need to be entered for the application to be able to scrape the price. `,
      p2: `The data editor feature makes it easy to select the item category and enter the item's name and data.`,
      p3: `A data table below displays all entered data. The tables are paginated and completely searchable. All data can be edited, in case something needs to be updated.`,
      p4: ``,
    },
    img: '/images/scrape_edit.png'
  },
  {
    title: 'Print',
    text: {
      p1: `Apart from displaying all price data on the dashboard, the application allows the user to export it in multiple ways.`,
      p2: `The user has the option to export all price data from each category in a pdf or csv document. With a simple click of a button the file saves to the desktop of the machine.`,
      p3: `The user also has the option to export only selected data, by using the table to search and select the specific items an then export that list in csv or pdf format.`,
      p4: ``,
    },
    img: '/images/scrape_print.png'
  },
  {
    title: 'Data Backup',
    text: {
      p1: `To ensure that data does not get lost and can be exported to different machines, I designed a simple data backup and recovery feature.`,
      p2: `The application stores the url data in local json files, that get exported to a folder on the desktop when the backup is called.`,
      p3: `To restore data to the application the user can simply drag and drop the backup json files to the upload entry forms, or select the files from machine.`,
      p4: ``,
    },
    img: '/images/scrape_backup.png'
  },
];

module.exports = scraper;