import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  PROTECTED_TEST,
  EXPERT_SIGNUP_LINK_REQUEST,
} from "../constants/actions";

const INITIAL_STATE = {
  error: "",
  message: "",
  content: "",
  resetMessage: "",
  resetErrorMessage: "",
  authenticated: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        error: "",
        message: "",
        authenticated: true,
      };
    case UNAUTH_USER:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        message: action.payload.message,
      };
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        resetMessage: action.payload.message,
        resetErrorMessage: action.payload.error,
      };
    case PROTECTED_TEST:
      return {
        ...state,
        content: action.payload.message,
      };
    case EXPERT_SIGNUP_LINK_REQUEST:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
}
