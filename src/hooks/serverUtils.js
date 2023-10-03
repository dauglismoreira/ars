export const getScreenSize = (userAgent) => {
    const isLargeScreen = userAgent >= 768;
    return {
      isLargeScreen,
      width: userAgent,
    };
  };