export default [
  {
    accountNo: "34551524578", // Konto for innbetaling
    kid: 34551524571, // kid for inbetaling tilsvarer kontonummer
    accountId: "34551524578",
    availableBalance: 122776.94, // Disponibelt beløp | LOAN: Same as Booked Balance plus Disbursements not effectuated. DEPOSIT: Booked balance minus Withdrawals not effectuated.
    bookedBalance: 122776.94, // Bokført saldo | Total outstanding balance
    accruedInterest: 1, // Ikke bokført rente | Interest accrued, not booked.
    interestRate: 10.5, // nominell rente. Interest accrued, not booked
    effectiveRate: 10.97, // effektiv rente
    accountType: "DEPOSIT", // LOAN/DEPOSIT
    nextDueDate: "31.05.2018", // Loan: Due Date for next term Deposit: N/A
    nextTermAmount: 10000, // Loan: Next gross term amount Deposit: N / A
    balanceDue: 92120 // Balance due, not paid
  },
  {
    accountNo: "546126722", // Konto for innbetaling
    kid: 5461, // kid for inbetaling tilsvarer kontonummer
    accountId: "546126722",
    availableBalance: 500000, // Disponibelt beløp | LOAN: Same as Booked Balance plus Disbursements not effectuated. DEPOSIT: Booked balance minus Withdrawals not effectuated.
    bookedBalance: 500000, // Bokført saldo | Total outstanding balance
    accruedInterest: 1, // Ikke bokført rente | Interest accrued, not booked.
    interestRate: 1.93, // nominell rente. Interest accrued, not booked
    effectiveRate: 1.95, // effektiv rente
    accountType: "LOAN", // LOAN/DEPOSIT
    balanceDue: 92120 // Balance due, not paid
  }
]
