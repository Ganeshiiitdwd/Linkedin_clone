import moment from "moment/moment"

export const getTime=(format)=>{
    // moment().format('LLL'); //just a convention for different type of time on moment page documentation
  return  moment().format(format);
}
