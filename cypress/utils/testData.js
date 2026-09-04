export const generateUser = () => {
  const uniqueId = Math.floor(100000 + Math.random() * 900000)

  return {
    firstName: 'Paulina',
    lastName: `Test${uniqueId}`,

    address: {
      street: 'Test Street 10',
      city: 'Warsaw',
      state: 'Mazowieckie',
      zipCode: '00-001'
    },

    phoneNumber: '123456789',
    ssn: uniqueId,

    username: `us3r${uniqueId}`,
    password: `TestPassword${uniqueId}!`
  }
}