import { StyleSheet, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import AppSaveView from "../../components/views/AppSaveView";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { IMAGES } from "../../constants/images-paths";
import { s, vs } from "react-native-size-matters";
import AppTextInput from "../../components/inputs/AppTextInput";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/buttons/AppButton";
import { AppColors } from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";

// Form Controller Imports
import AppTextInputController from "../../components/inputs/AppTextInputController";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { showMessage } from "react-native-flash-message";

const schema = yup
  .object({
    userName: yup
      .string()
      .required("User name is required")
      .min(5, "User name must be more than 5 characters"),
    email: yup.string().email("Email is wrong").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignUpScreen = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation();

  const onSignUpPress = async (data: FormData) => {

    try {

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      Alert.alert("User Created");
      navigation.navigate("MainAppBottomTabs");
      return userCredential.user
    } catch (error: any) {
        let errorMessage = ""

        if (error.code === "auth/email-already-in-use") {
          errorMessage = "This email is already in use! you can't use this email";
        } else if (error.code === "auth/invalid-email") {
          errorMessage = "The email address is invalid.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "The password is too weak.";
        } else {
          errorMessage = "An error occurred during sign-up.";
        }

        showMessage({
          type: "danger",
          message: errorMessage
        })
    }
  };

  return (
    <AppSaveView style={styles.container}>
      <Image source={IMAGES.appLogo} style={styles.logo} />
      <AppTextInputController<FormData>
        control={control}
        name="userName"
        placeholder="User Name"
      />
      <AppTextInputController<FormData>
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AppTextInputController<FormData>
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <AppText style={styles.appName}>Smart E-Commerce</AppText>
      <AppButton
        title="Create New Account"
        onPress={handleSubmit(onSignUpPress)}
      />
      <AppButton
        title="Go To Sign In"
        style={styles.signInButton}
        textColor={AppColors.primary}
        onPress={() => navigation.navigate("SignInScreen")}
      />
    </AppSaveView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: sharedPaddingHorizontal,
  },
  logo: {
    height: s(150),
    width: s(150),
    marginBottom: vs(30),
  },
  appName: {
    fontSize: s(16),
    marginBottom: vs(15),
  },
  signInButton: {
    backgroundColor: AppColors.white,
    borderWidth: 1,
    marginTop: vs(15),
    borderColor: AppColors.primary,
  },
});
