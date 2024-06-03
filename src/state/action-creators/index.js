export const depositMoney = (amount) => {
   return (dispatch) => {
      dispatch({
         type: 'deposit',
         amount: amount
      })
   }
}


export const withdrawMoney = (amount) => {
   return (dispatch) => {
      dispatch({
         type: 'withdraw',
         amount: amount
      })
   }
}