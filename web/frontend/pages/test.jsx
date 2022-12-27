import { Page, Layout, Card, Button } from '@shopify/polaris'; 
import { useNavigate } from '@shopify/app-bridge-react';
export default function Test() {
const navigate = useNavigate()
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card title="Welcome Message" sectioned>
            <p>
              Hey Guys, <br />
              Welcome to my first Shopify Application!
              <br /> Regards <br /> Khudadad Rasikh
            </p>
            <Button onClick={() => navigate('/')}>
              Return Back
            </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
