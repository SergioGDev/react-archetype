import styles from "./LoginPage.module.scss";
import { FormControlInputText } from "@/components/ui/FormControlInputText";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

export const LoginPage = () => {
  const methods = useForm();
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <h2>Login Page</h2>

        <FormProvider {...methods}>
          <form>
            <FormControlInputText
              name="username"
              placeholder="Username..."
              label="Username"
              required
              sx={{ width: '100%' }}
              />

            <FormControlInputText
              name="password"
              placeholder="Password..."
              label="Password"
              type="password"
              required
              sx={{ width: '100%' }}
            />

            <Button variant="outlined" type="submit">Login</Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
