import * as React from "react";
import { Button,Link,Card,Grid } from "@mui/material";
import Copyright from "./Copyright";

export default function Footer() {
    return (
        <>
        <Card className="footer">
            <div className="footer-item">
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Audio and Subtitles</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Audio Description</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Help center</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Gift Cards</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Media Center</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Investor Relations</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Jobs</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Terms of Use</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Security</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Legal Provisions</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Cookie Preferences</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Corporate Information</Link>
                  </Grid>
                  <Grid item xs={6} md={3}  >
                    <Link variant="body2" href="#">Contact us</Link>
                  </Grid>
                </Grid>  
            </div>
            <Button variant="outlined" className="service-code" sx={{marginTop:'1em'}}>Service Code</Button>
            <Copyright sx={{ mt: 1 }}/>
        </Card>
        </>
    );
}