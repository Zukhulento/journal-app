import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { AuthLayouth } from "../layout/AuthLayouth";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  displayName: "",
  email: "",
  password: "",
};
const formValidations = {
  email: [(value) => value.includes("@"), "Debe ser un correo válido."],
  password: [
    (value) => value.length > 5,
    "La contraseña debe tener al menos 6 caracteres.",
  ],
  displayName: [(value) => value.length > 0, "El nombre es requerido."],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const {
    displayName,
    email,
    password,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
    onInputChange,
  } = useForm(formData, formValidations);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };
  return (
    <AuthLayouth title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Tu nombre completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayouth>
  );
};
