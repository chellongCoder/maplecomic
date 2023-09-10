import React, { useCallback, useContext, useState } from "react";
import { StyleSheet } from "react-native";

export type NavigationT = {
  indexScreen: ScreenE;
  changeScreen: (index: ScreenE) => void;
};

export const NavigationContext = React.createContext<Partial<NavigationT>>({});

export const useNavigation = () => {
  return useContext(NavigationContext);
};

export enum ScreenE {
  SCREEN1,
  SCREEN2,
}
const NavigationProvider = ({ children }) => {
  const [indexScreen, setIndexScreen] = useState(ScreenE.SCREEN1);

  const changeScreen = useCallback((index: ScreenE) => {
    setIndexScreen(index);
  }, []);

  return (
    <NavigationContext.Provider value={{ indexScreen, changeScreen }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;

const styles = StyleSheet.create({});
