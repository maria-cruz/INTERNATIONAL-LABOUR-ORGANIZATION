import Bullet from "@common/components/Icons/Bullet";
import Check from "@common/components/Icons/Check";
import React from "react";
import useTranslation from "next-translate/useTranslation";

interface PasswordRuleProps {
  isLongerThanSevenChars?: boolean;
  isAtleastOneNumber?: boolean;
  hasUppercase?: boolean;
  hasLowercase?: boolean;
}

const PasswordRule: React.FC<PasswordRuleProps> = ({
  isLongerThanSevenChars,
  isAtleastOneNumber,
  hasUppercase,
  hasLowercase,
}) => {
  const { t } = useTranslation("sign-up");

  return (
    <>
      <div className="set-password-rule-container">
        <div className="password-rule-title">{t("passwordRequirements")}</div>
        <div>
          <div className="set-password-requirements-container">
            {!isLongerThanSevenChars && (
              <Bullet
                className="bullet-icon"
                width=".513rem"
                height=".513rem"
                fill="#FF0000"
              />
            )}
            {isLongerThanSevenChars && (
              <Check
                className="check-icon"
                fill="#007A50"
                width="1.359rem"
                height=".941rem"
              />
            )}
            <span
              className={`${
                isLongerThanSevenChars
                  ? "set-password-requirements "
                  : "error-text"
              }`}
            >
              {t("minimumCharacters")}
            </span>
          </div>

          <div className="set-password-requirements-container">
            {!hasLowercase && (
              <Bullet
                className="bullet-icon"
                width=".513rem"
                height=".513rem"
                fill="#FF0000"
              />
            )}
            {hasLowercase && (
              <Check
                className="check-icon"
                fill="#007A50"
                width="1.359rem"
                height=".941rem"
              />
            )}

            <span
              className={`${
                hasLowercase ? "set-password-requirements " : "error-text"
              }`}
            >
              {t("lowercaseLetter")}
            </span>
          </div>
          <div className="set-password-requirements-container">
            {!hasUppercase && (
              <Bullet
                className="bullet-icon"
                width=".513rem"
                height=".513rem"
                fill="#FF0000"
              />
            )}
            {hasUppercase && (
              <Check
                className="check-icon"
                fill="#007A50"
                width="1.359rem"
                height=".941rem"
              />
            )}
            <span
              className={`${
                hasUppercase ? "set-password-requirements " : "error-text"
              }`}
            >
              {t("uppercaseLetter")}
            </span>
          </div>
          <div className="set-password-requirements-container">
            {!isAtleastOneNumber && (
              <Bullet
                className="bullet-icon"
                width=".513rem"
                height=".513rem"
                fill="#FF0000"
              />
            )}
            {isAtleastOneNumber && (
              <Check
                className="check-icon"
                fill="#007A50"
                width="1.359rem"
                height=".941rem"
              />
            )}

            <span
              className={`${
                isAtleastOneNumber ? "set-password-requirements " : "error-text"
              }`}
            >
              {t("atleastNumber")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRule;
