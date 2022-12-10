import moment from 'moment';
export const servicesName = [
  {label: 'Ac Services', value: 'Ac Services'},
  {label: 'Cleaning', value: 'Cleaning'},
  {label: 'Electrician', value: 'Electrician'},
  {label: 'Geyser', value: ' Geyser'},
  {label: 'Home Appliances', value: 'Home Appliances'},
  {label: 'Plumber', value: 'Plumber'},
];

export const cityName = [
  {label: 'Karachi', value: 'Karachi'},
  {label: 'Lahore', value: 'Lahore'},
  {label: 'Islamabad', value: 'Islamabad'},
  {label: 'Rawalpindi', value: ' Rawalpindi'},
];
export const ACServicesCat = [
  {label: 'AC Dismounting', value: 'AC Dismounting'},
  {label: 'AC General Service', value: 'AC General Service'},
  {label: 'AC installation', value: 'AC installation'},
  {
    label: 'AC Monitoring and Dismounting ',
    value: 'AC Monitoring and Dismounting ',
  },
  {label: 'AC Repairing', value: 'AC Repairing'},
];
export const Cleaning = [
  {label: 'Carpet ', value: 'Carpet '},
  {label: 'Chair', value: 'Chair'},
  {label: 'Curtain', value: 'Curtain'},
  {label: 'Mattress', value: 'Mattress'},
  {label: 'Sofa', value: 'Sofa'},
];

export const Electrician = [
  {label: 'Ceiling Fan', value: ''},
  {label: 'Change Over Switch', value: 'Change Over Switch'},
];
export const Geyser = [
  {label: 'Gas Geyser Installation', value: 'Gas Geyser Installation'},
  {label: 'Instant Geyser', value: 'Instant Geyser'},
  {label: 'Geyser Repair', value: 'Geyser Repair'},
];
export const Plumber = [
  {label: 'Water Piping', value: 'Water Piping'},
  {label: 'Kitchen Drain Blockage', value: 'Kitchen Drain Blockage'},
];
export const Home = [{label: 'Fridge Repair', value: 'Fridge Repair'}];

export const unitQuantity = [
  {label: 'Vary After Inspection', value: 'Vary After Inspection'},
  {label: 'Fixed Charges', value: 'Fixed Charges'},
  {label: 'Per Point', value: 'Per Point'},
  {label: 'Starting From', value: 'Starting From'},
  {label: 'Visit Charges', value: 'Visit Charges'},
];
export const getTruncatedString = (name, length) => {
  return `${name.length}` > length ? `${name.substr(0, length)}...` : name;
};

export const getTime = time => {
  return new Date(time).toLocaleTimeString();
};
