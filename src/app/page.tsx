import HomePage from "@/components/homePages/HomePage";
import styles from "./page.module.css";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
     <Typography component='h2' variant="h2">
     Welcome to Car Doctor Pro!!
     <HomePage></HomePage>
     </Typography>
    </main>
  );
}
