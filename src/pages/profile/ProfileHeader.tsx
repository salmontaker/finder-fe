import { DefaultButton } from "@fluentui/react";
import { Field, Image, ProgressBar, ProgressBarProps } from "@fluentui/react-components";

import { User } from "@/apis/user";
import useStyles from "@/pages/profile/ProfileHeader.css";

interface Props extends Partial<ProgressBarProps> {
  isMobileMode: boolean;
  toggleEditMode: () => void;
  toggleLostGoodsMode: () => void;
  user?: User;
}

function ProfileHeader({
  isMobileMode,
  toggleEditMode,
  toggleLostGoodsMode,
  user,
  ...progressBarProps
}: Props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <Image
        className={styles.image}
        fit="cover"
        shape="circular"
        src={user ? user.profileImage : "/profileIMGimsi.png"}
      />

      <div className={styles.profile}>
        <div className={styles.profile_01}>
          <div>
            <div className={styles.nickname}>{user?.username}</div>
            <div className={styles.id}>{`@${user?.userId}`}</div>
          </div>
          <div>
            {!isMobileMode && (
              <DefaultButton
                className={styles.achieveButton}
                text="내가 쓴 글"
                onClick={toggleLostGoodsMode}
              />
            )}
            <DefaultButton
              className={styles.profileChangeButton}
              text="프로필 설정"
              onClick={toggleEditMode}
            />
          </div>
        </div>
        <div>
          <Field className={styles.progressBar} validationState="none">
            <ProgressBar {...progressBarProps} thickness="large" value={0.3} />
          </Field>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
