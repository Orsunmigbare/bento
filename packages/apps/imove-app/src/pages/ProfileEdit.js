import React from "react"
import { Layout, Button, Box, Wrapper } from "@staccx/base"
import Contact from "../components/Contact"
import profile from "../data/profile"

const Profile = ({ history }) => (
  <Wrapper size="small">
    <Box variant="center">
      <Layout>
        <Contact
          name={profile.name}
          tel={profile.tel}
          mail={profile.mail}
          postalNumber={profile.postalNumber}
          consent={profile.consent}
        />
        <Button
          onClick={() =>
            history.push({
              pathname: "/app/profile"
            })
          }
        >
          Lagre {/* TODO: Sanitytext */}
        </Button>
      </Layout>
    </Box>
  </Wrapper>
)

export default Profile
