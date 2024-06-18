import { createMachine } from "xstate";

export const todosMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FWwAQFkCGAxgBYCWAdmAHQAyqeE5UWaGsAxC5lgDZ0SQBtAAwBdRKAAOmEgBcSqMuJAAPRAEYATAGZKWgJwaALAA4AbIYDsagKxDTQiwBoQAT0QBaLRsqmNNtWpamoEaFhYAvuHOnNj4xORUtPSMzOiYbEkMZEwyadgAZngk3IKiSlKwsvKKSCoeanqGlIaGGtZ6pmoOhjbWzm4I7u2U2mrG1hYOfob6etaRUSBk6HBKMbiEpBTl0nIKSqqDRt4tbR1dFj3Wfa4eGqamlNbmM5faLdZqkdF5G-EUND4KRiO0qexqoEO7jUpgslCE2nMQS8xiExi0Wn69VR8Ks9jUJnsBlM3xA6ziWyo60ykFBVX2tUOmmslE043GVgaXQeWIQmke3Ix4xMhj0mkMpPJmwSgOS2VSrCwAFEAE4q1Aq2m1Cr0iF1QYw7xi7QaUL6Lqi4y8-msuxC6wi40aBbhIA */
  id: "Todos Machine",

  states: {
    "Loading Todos": {
      on: {
        "Todos loaded": "Todos Loaded",
        "Loading todos failed": "Loading Todos Errored",
      },
    },

    "Todos Loaded": {},
    "Loading Todos Errored": {},
  },

  initial: "Loading Todos",
});
