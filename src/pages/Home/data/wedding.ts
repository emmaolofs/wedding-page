export const WEDDING = {
  partnerOne: 'Emma',
  partnerTwo: 'Philip',
  weekendStart: new Date('2027-08-06T00:00:00+02:00'),
  weekendEnd: new Date('2027-08-08T23:59:59+02:00'),
  // Explicit Sweden summer time so guests abroad get the right moment
  ceremonyDate: new Date('2027-08-07T15:00:00+02:00'),
  ceremonyEnd: new Date('2027-08-07T16:30:00+02:00'),
  city: 'Gräddö',
  venue: 'Lidö Värdshus',
  address: 'Lidö, 760 15 Gräddö',
} as const
