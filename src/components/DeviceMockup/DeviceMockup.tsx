import { android_frame, og_image } from "@/assets";
import { useSemanticColor } from "@gdsc-yonsei/color";
import {
  ButtonFrame,
  Icon,
  Image,
  createStyleSheet,
  useScreen,
} from "@whatssub/wds-react-web";
import styled from "styled-components";

// Galaxy S20
const DeviceMockup = () => {
  const { content, tabBar, button } = useSemanticColor();
  const { busy } = useScreen();

  const styles = createStyleSheet({
    container: {
      backgroundImage: `url(${android_frame})`,
    },
    background: {
      padding: "0 8px",
      borderRadius: "4px",
    },
    label: {
      fontSize: "12px",
    },
  });

  return (
    <DeviceMockupContainer style={styles.container}>
      <ScreenContainer>
        <ViewportContainer>
          <NavigationBar>
            <Icon.Search size={24} fill={content.gray.a7} />
            <NavCenterWrapper>
              <Title>GDSC Yonsei</Title>
            </NavCenterWrapper>
            <Icon.Profile size={24} fill={content.gray.a7} />
          </NavigationBar>
          <BodyContainer>
            <MainWrapper>
              <Image src={og_image} height={110} objectFit={"cover"} />
              <IconWrapper>
                <Icon.Profile fill={content.gray.a7} />
                <Author>Author: @whatisyourname0</Author>
              </IconWrapper>
              <MainTitle>Semantic Color Announced!</MainTitle>
              <MainParagraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia quis ipsa incidunt fugiat culpa laboriosam quas ea eum
                sapiente voluptas!
              </MainParagraph>
              <ButtonContainer>
                <ButtonFrame
                  backgroundColor={{
                    common: button.primary.background.common,
                    focused: button.primary.background.active,
                    pressed: button.primary.background.pressed,
                    loading: button.primary.background.loading,
                    disabled: button.primary.background.disabled,
                  }}
                  labelColor={{
                    common: button.primary.label.common,
                    focused: button.primary.label.active,
                    pressed: button.primary.label.pressed,
                    loading: button.primary.label.loading,
                    disabled: button.primary.label.disabled,
                  }}
                  label={"Primary"}
                  style={styles.background}
                  labelStyle={styles.label}
                  loading={busy}
                />
                <ButtonFrame
                  backgroundColor={{
                    common: button.secondary.background.common,
                    focused: button.secondary.background.active,
                    pressed: button.secondary.background.pressed,
                    loading: button.secondary.background.loading,
                    disabled: button.secondary.background.disabled,
                  }}
                  labelColor={{
                    common: button.secondary.label.common,
                    focused: button.secondary.label.active,
                    pressed: button.secondary.label.pressed,
                    loading: button.secondary.label.loading,
                    disabled: button.secondary.label.disabled,
                  }}
                  label={"Secondary"}
                  style={styles.background}
                  labelStyle={styles.label}
                  loading={busy}
                />
                <ButtonFrame
                  backgroundColor={{
                    common: button.tertiary.background.common,
                    focused: button.tertiary.background.active,
                    pressed: button.tertiary.background.pressed,
                    loading: button.tertiary.background.loading,
                    disabled: button.tertiary.background.disabled,
                  }}
                  labelColor={{
                    common: button.tertiary.label.common,
                    focused: button.tertiary.label.active,
                    pressed: button.tertiary.label.pressed,
                    loading: button.tertiary.label.loading,
                    disabled: button.tertiary.label.disabled,
                  }}
                  label={"Tertiary"}
                  style={styles.background}
                  labelStyle={styles.label}
                  loading={busy}
                />
              </ButtonContainer>
            </MainWrapper>
          </BodyContainer>
          <TabBarContainer>
            <TabBarItem>
              <Icon.Home size={18} fill={tabBar.primary.label.common} />
              <TabBarLabel>Home</TabBarLabel>
            </TabBarItem>
            <TabBarItem>
              <Icon.Institution size={18} fill={tabBar.primary.label.common} />
              <TabBarLabel>Bank</TabBarLabel>
            </TabBarItem>
            <TabBarItem>
              <Icon.People size={18} fill={tabBar.primary.label.common} />
              <TabBarLabel>Contacts</TabBarLabel>
            </TabBarItem>
            <TabBarItem>
              <Icon.HelpBg size={18} fill={tabBar.primary.label.common} />
              <TabBarLabel>Help</TabBarLabel>
            </TabBarItem>
          </TabBarContainer>
        </ViewportContainer>
      </ScreenContainer>
    </DeviceMockupContainer>
  );
};

export default DeviceMockup;

const DeviceMockupContainer = styled.figure`
  width: 273px;
  height: 580px;

  object-fit: cover;
  background-size: contain;
`;

const ScreenContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;

  padding: 40px 12px 22px;
`;

const ViewportContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--background-common-primary);
  border-radius: 4px;
`;

const NavigationBar = styled.nav`
  width: 100%;
  height: 42px;

  padding: 14px 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavCenterWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 12px;
`;

const BodyContainer = styled.div`
  width: 100%;
  flex: 1;

  padding: 16px;

  background-color: var(--background-common-secondary);
`;

const TabBarContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--tab-bar-primary-background-active);
`;

const TabBarItem = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const TabBarLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;

  color: var(--tab-bar-primary-label-common);
  transition: color var(--theme-transition);
`;

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  background-color: var(--background-common-tertiary);
  border-radius: 16px;
  overflow: hidden;
`;

const IconWrapper = styled.div`
  width: 100%;
  padding: 0 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const Author = styled.span`
  font-size: 12px;
`;

const MainTitle = styled.span`
  display: block;
  padding: 0 16px;

  font-size: 28px;
`;

const MainParagraph = styled.p`
  padding: 0 16px;
  font-size: 12px;
  line-height: 1.1;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 16px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;
