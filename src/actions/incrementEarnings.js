import { INCREMENT_EARNINGS } from "../constants/constants.js";

const incrementEarnings = amount => {
  return {
    type: INCREMENT_EARNINGS,
    amount: amount
  }
}

export default incrementEarnings;