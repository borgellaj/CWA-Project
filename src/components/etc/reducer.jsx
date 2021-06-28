const initialState = {
    date: '',
    name: '',
    DateofBirth: '',
    male: false,
    HomeAddress: '',
    Apt: '',
    City: '',
    Zip: '',
    HomeTelephone: '',
    WorkTelephone: '',
    CellNumber: '',
    EmailAddress: '',
    Employer: '',
    Datestarted: '',
    Schooling: '',
    yearGraduated1: '',
    CollegeCompleted: '',
    Major: '',
    yearGraduated2: '',
    Class: '',
    whereTaken: '',
    yearTaken: '',
    recaptcha:'',
  };
  
  function addReducer(state = initialState, action) {
      
    switch(action.type) {
      case 'SUBMIT':
        return {
            date:action.payload.date,
            name: action.payload.name,
            DateofBirth: action.payload.DateofBirth,
            male: action.payload.male,
            HomeAddress: action.payload.HomeAddress,
            Apt: action.payload.Apt,
            City: action.payload.City,
            Zip: action.payload.Zip,
            HomeTelephone: action.payload.HomeTelephone,
            WorkTelephone: action.payload.WorkTelephone,
            CellNumber: action.payload.CellNumber,
            EmailAddress: action.payload.EmailAddress,
            Employer: action.payload.Employer,
            Datestarted: action.payload.Datestarted,
            Schooling: action.payload.Schooling,
            yearGraduated1: action.payload.yearGraduated1,
            CollegeCompleted: action.payload.CollegeCompleted,
            Major: action.payload.Major,
            yearGraduated2: action.payload.yearGraduated2,
            Class: action.payload.Class,
            whereTaken: action.payload.whereTaken,
            yearTaken: action.payload.yearTaken,
            certification: action.payload.certification,
            recaptcha: action.payload.recaptcha,

        }
      default:
        return state;
    }
  }
  
  export default addReducer;