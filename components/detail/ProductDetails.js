import { useState } from "react";

const ProductDetails = () => {
  const [info, setInfo] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const text1 = `Info Penting lfow A react component that uses a high-res source
  image to produce a zoom window on mouse hover. Latest version:
  1.3.0, last published: 3 years javascript - React component
  that zooms into an image while Stack Overflow › questions ›
  react-component-that-zooms-into-an-ima Gambar thumbnail 30
  Jul 2020 Creating a custom css class and applying that to
  the img element. index.css: .hov`;

  const text2 = ` This is proprietary taste of Flores Manggarai Yellow Caturra.
  Feels freshy with hint of jasmine tea and you’re gonna taste
  like citrus lemon. It features a rich aroma with a smooth
  mouthfeels. Find your taste and explore many methods to brew
  this filter coffee! [GRAB IT FAST, LIMITED STOCK]`;
  return (
    <div className="w-full">
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-2">
          <p className="text-xl font-bold">
            Single Origin Flores Manggarai Yellow Caturra Coldbrew Roasters
          </p>
          <div className="flex items-center gap-x-2 ">
            <p className="text-sm">Terjual 100+</p>
            <div className="bg-black w-1 h-1 rounded-full" />
            <div className="flex items-center">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4154 5.32753L8.94409 4.82304L7.39233 1.67714C7.34995 1.59101 7.28022 1.52128 7.19409 1.4789C6.97808 1.37226 6.71558 1.46113 6.60757 1.67714L5.05581 4.82304L1.58452 5.32753C1.48882 5.3412 1.40132 5.38632 1.33432 5.45468C1.25333 5.53792 1.20871 5.64991 1.21024 5.76605C1.21178 5.88218 1.25936 5.99295 1.34253 6.07402L3.85405 8.52265L3.26069 11.9803C3.24678 12.0607 3.25568 12.1434 3.28638 12.219C3.31709 12.2947 3.36837 12.3602 3.43442 12.4082C3.50046 12.4561 3.57863 12.4846 3.66005 12.4904C3.74147 12.4962 3.82288 12.4791 3.89507 12.441L6.99995 10.8086L10.1048 12.441C10.1896 12.4861 10.288 12.5012 10.3824 12.4848C10.6203 12.4437 10.7802 12.2182 10.7392 11.9803L10.1459 8.52265L12.6574 6.07402C12.7257 6.00702 12.7709 5.91952 12.7845 5.82382C12.8214 5.58456 12.6546 5.36308 12.4154 5.32753Z"
                  fill="#FFC700"
                />
              </svg>
            </div>

            <p className="text-sm">4.8</p>
            <div className="bg-black w-1 h-1 rounded-full" />
            <p className="text-sm">(2 ulasan)</p>
            <div className="bg-black w-1 h-1 rounded-full" />
            <p className="text-sm">Diskusi (0)</p>
          </div>
        </div>
        <div>
          <p className="text-3xl font-bold">Rp 200.000</p>
        </div>
        <div className="flex items-center gap-x-2">
          <div>
            <svg
              width="27"
              height="15"
              viewBox="0 0 27 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="27" height="14" rx="3" fill="#D63031" />
              <path
                d="M4.97656 10.5V5.64453H4.91406L3.48047 6.68359V5.94141L4.98047 4.86328H5.67969V10.5H4.97656ZM9.25781 10.6328C8.6224 10.6328 8.13021 10.375 7.78125 9.85938C7.43229 9.34375 7.25781 8.61719 7.25781 7.67969C7.25781 6.75 7.43359 6.02604 7.78516 5.50781C8.13672 4.98958 8.6276 4.73047 9.25781 4.73047C9.88542 4.73047 10.3737 4.99089 10.7227 5.51172C11.0742 6.03255 11.25 6.75911 11.25 7.69141C11.25 8.6263 11.0755 9.35026 10.7266 9.86328C10.3802 10.3763 9.89062 10.6328 9.25781 10.6328ZM8.29688 9.41406C8.52083 9.81771 8.84115 10.0195 9.25781 10.0195C9.67448 10.0195 9.99219 9.81901 10.2109 9.41797C10.4323 9.01432 10.543 8.4349 10.543 7.67969C10.543 6.93229 10.431 6.35677 10.207 5.95312C9.98568 5.54948 9.66927 5.34766 9.25781 5.34766C8.84635 5.34766 8.52734 5.55078 8.30078 5.95703C8.07682 6.36068 7.96484 6.9349 7.96484 7.67969C7.96484 8.43229 8.07552 9.01042 8.29688 9.41406ZM14.2969 10.6328C13.6615 10.6328 13.1693 10.375 12.8203 9.85938C12.4714 9.34375 12.2969 8.61719 12.2969 7.67969C12.2969 6.75 12.4727 6.02604 12.8242 5.50781C13.1758 4.98958 13.6667 4.73047 14.2969 4.73047C14.9245 4.73047 15.4128 4.99089 15.7617 5.51172C16.1133 6.03255 16.2891 6.75911 16.2891 7.69141C16.2891 8.6263 16.1146 9.35026 15.7656 9.86328C15.4193 10.3763 14.9297 10.6328 14.2969 10.6328ZM13.3359 9.41406C13.5599 9.81771 13.8802 10.0195 14.2969 10.0195C14.7135 10.0195 15.0312 9.81901 15.25 9.41797C15.4714 9.01432 15.582 8.4349 15.582 7.67969C15.582 6.93229 15.4701 6.35677 15.2461 5.95312C15.0247 5.54948 14.7083 5.34766 14.2969 5.34766C13.8854 5.34766 13.5664 5.55078 13.3398 5.95703C13.1159 6.36068 13.0039 6.9349 13.0039 7.67969C13.0039 8.43229 13.1146 9.01042 13.3359 9.41406ZM21.5898 10.0977C21.7617 10.0977 21.8997 10.0195 22.0039 9.86328C22.1107 9.70443 22.1641 9.49609 22.1641 9.23828C22.1641 8.97526 22.112 8.76693 22.0078 8.61328C21.9062 8.45964 21.7669 8.38281 21.5898 8.38281C21.4154 8.38281 21.2747 8.46094 21.168 8.61719C21.0638 8.77083 21.0117 8.97786 21.0117 9.23828C21.0117 9.4987 21.0638 9.70703 21.168 9.86328C21.2747 10.0195 21.4154 10.0977 21.5898 10.0977ZM22.4531 10.2188C22.2292 10.4714 21.9414 10.5977 21.5898 10.5977C21.2383 10.5977 20.9492 10.4714 20.7227 10.2188C20.4987 9.96354 20.3867 9.63672 20.3867 9.23828C20.3867 8.84245 20.4987 8.51823 20.7227 8.26562C20.9492 8.01042 21.2383 7.88281 21.5898 7.88281C21.9414 7.88281 22.2292 8.00911 22.4531 8.26172C22.6771 8.51432 22.7891 8.83984 22.7891 9.23828C22.7891 9.63672 22.6771 9.96354 22.4531 10.2188ZM19.1914 7.10156C18.9674 7.35417 18.6797 7.48047 18.3281 7.48047C17.9766 7.48047 17.6875 7.35417 17.4609 7.10156C17.237 6.84635 17.125 6.51953 17.125 6.12109C17.125 5.72526 17.237 5.40104 17.4609 5.14844C17.6875 4.89323 17.9766 4.76562 18.3281 4.76562C18.6797 4.76562 18.9674 4.89193 19.1914 5.14453C19.4154 5.39714 19.5273 5.72266 19.5273 6.12109C19.5273 6.51953 19.4154 6.84635 19.1914 7.10156ZM18.2656 10.5H17.5469L19.6992 7.5625L21.6758 4.86328H22.3867L20.1992 7.85547L18.2656 10.5ZM18.3281 6.98047C18.5 6.98047 18.638 6.90234 18.7422 6.74609C18.849 6.58724 18.9023 6.37891 18.9023 6.12109C18.9023 5.85807 18.8503 5.64974 18.7461 5.49609C18.6445 5.34245 18.5052 5.26562 18.3281 5.26562C18.1536 5.26562 18.013 5.34375 17.9062 5.5C17.8021 5.65365 17.75 5.86068 17.75 6.12109C17.75 6.38151 17.8021 6.58984 17.9062 6.74609C18.013 6.90234 18.1536 6.98047 18.3281 6.98047Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <del className="text-xs">Rp 130.000</del>
          </div>
        </div>
        <div className="border-t border-b flex items-center gap-x-2">
          <button
            onClick={() => setInfo(false)}
            disabled={!info}
            className={`py-2 duration-150 ${
              info ? "" : "text-red-600 border-b-2 border-red-500"
            }`}
          >
            <p className="text-sm font-bold">Detail</p>
          </button>
          <button
            onClick={() => setInfo(true)}
            disabled={info === true}
            className={`py-2 duration-150 ${
              info ? "text-red-600 border-b-2 border-red-500" : ""
            }`}
          >
            <p className="text-sm font-bold">Info penting</p>
          </button>
        </div>
        <div>
          {info ? (
            <div
              className={`duration-500 w-full transition-transform ${
                readMore ? "h-full" : "h-44"
              }`}
            >
              <p>
                {readMore
                  ? text1.substring(0, 250) + "..."
                  : text1.substring(0, text1.length)}
              </p>
            </div>
          ) : (
            <div
              className={`duration-500 w-full transition-transform ${
                readMore ? "h-full" : "h-44"
              }`}
            >
              <p>
                {" "}
                {readMore
                  ? text2.substring(0, 250) + "..."
                  : text2.substring(0, text1.length)}
              </p>
            </div>
          )}
        </div>
        <div>
          <button onClick={() => setReadMore(!readMore)}>
            <p className="text-red-600 font-bold text-md">
              {readMore ? "Lihat Selengkapnya" : "Lihat Lebih Sedikit"}
            </p>
          </button>
        </div>
        <div>
          <button className="flex items-center w-full bg-red-600 justify-around px-4 py-2 rounded-xl">
            <svg
              width="56"
              height="55"
              viewBox="0 0 56 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0.5" width="55" height="55" rx="27.5" fill="#0C0C0C" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1698 33.7487C7.63467 31.0497 12.0035 21.3716 15.167 21.9783C15.329 22.0117 15.491 22.0595 15.6387 22.1359C15.7863 22.2076 15.9197 22.2983 16.0436 22.4082C16.1627 22.5133 16.2723 22.6327 16.3724 22.7617C16.4629 22.8859 16.5439 23.0196 16.6201 23.1629C16.6868 23.3015 16.7487 23.44 16.8011 23.5881C16.8535 23.7314 16.8964 23.8795 16.9298 24.0276C17.0679 24.6534 17.168 25.5323 17.1775 25.6947C17.1823 25.8619 16.9441 25.9336 16.8535 25.7234C16.7583 25.518 16.5582 24.0897 16.1961 23.3779C16.1389 23.2585 16.0722 23.1486 15.9912 23.0435C15.9197 22.9432 15.834 22.8477 15.7387 22.7665C15.6434 22.6853 15.5386 22.6136 15.429 22.5563C15.3194 22.5037 15.2003 22.4655 15.086 22.4416C12.3847 21.9687 8.32073 31.0115 11.4747 33.3904C13.9235 35.2344 16.3485 30.2042 17.0346 28.6995C16.9774 28.5275 16.9679 28.2791 17.0203 28.1023C17.006 28.088 16.9917 28.0737 16.9727 28.0593C16.015 27.0992 18.7974 25.9002 18.6497 28.0116C19.0451 28.0116 19.512 27.9304 19.8693 27.7775C19.8169 26.9797 19.9884 25.9861 20.2028 25.217C20.2743 24.9543 20.3601 24.6964 20.4553 24.4432C20.7412 23.6359 21.6512 22.7665 21.7131 24.0897C21.7655 24.897 21.1223 26.4113 20.7221 27.1947C20.6078 27.4288 20.4935 27.6581 20.3648 27.8826C20.5268 29.5641 21.7417 28.8093 22.3182 27.9351C22.4039 27.5769 22.8804 27.0084 23.2758 27.2473C23.3901 26.5212 24.0952 23.6311 24.9671 23.7314C26.3202 23.9177 24.3573 27.5148 23.6617 27.9495C23.6522 28.1358 23.6283 28.9479 23.9428 29.053C24.3716 29.2201 25.3864 28.045 25.7151 27.8492C25.8342 27.7727 25.9438 27.9208 25.8961 28.0068C25.4626 28.838 23.5998 30.5195 23.2329 28.7281C22.9423 28.9574 22.5087 28.9431 22.3563 28.5609C21.675 29.4208 20.4268 29.8173 19.998 28.4845C19.9646 28.389 19.9408 28.2886 19.9217 28.1883C19.512 28.3794 19.0165 28.4654 18.5639 28.4749C18.3972 28.9956 17.9065 29.4494 17.3538 29.1151C17.2395 29.0482 14.5191 36.3092 11.1698 33.7487ZM37.5543 27.3476C37.4924 27.252 37.5448 27.1708 37.6115 27.2043C37.8592 27.3428 37.9164 27.9113 37.5543 27.3476ZM40.2176 27.5673C40.2795 27.4718 40.2271 27.3858 40.1604 27.4192C39.9126 27.5578 39.8459 28.1214 40.2176 27.5673ZM35.62 28.4081C34.5909 27.1231 32.0849 28.1835 30.9463 28.8141C30.8176 28.881 30.5604 28.4654 30.7462 28.389C31.4799 27.9829 32.1278 27.4383 32.6995 26.8221C32.9854 26.5116 33.2474 26.1724 33.4904 25.8237C33.7286 25.475 33.943 25.112 34.124 24.7298C34.2098 24.5435 34.2908 24.3476 34.3527 24.1518C34.6576 23.2394 34.4909 22.6853 33.5619 23.4973C33.4046 23.6311 33.2617 23.7887 33.1283 23.9464C32.8472 24.2664 32.5947 24.6056 32.3517 24.9591C31.8658 25.6661 31.4227 26.4161 30.9987 27.1708C30.5747 27.9256 30.1745 28.6947 29.7886 29.4733C29.3979 30.2472 29.0215 31.0306 28.6547 31.8188C27.8257 33.5863 27.5255 34.1213 27.435 34.2455C27.3302 34.3936 27.1206 34.3411 27.1539 34.1595C27.2349 33.7392 27.5779 32.8124 28.0734 31.5418C28.3116 30.916 28.5498 30.295 28.7928 29.674C29.2454 28.4988 29.7028 27.3285 30.1316 26.1438C30.265 25.7712 30.3984 25.3986 30.5175 25.0212C30.5604 24.8731 30.6128 24.7107 30.6509 24.553C30.2697 24.8397 29.6409 25.6661 29.3931 25.7903C29.3217 25.8285 29.2264 25.733 29.2311 25.6804C29.2788 25.2075 31.4656 22.8047 31.1321 24.5339C31.1178 24.6247 31.094 24.7202 31.0701 24.811C30.9463 25.2457 30.7938 25.6804 30.6461 26.1056C30.3079 27.061 29.941 28.0116 29.5742 28.9574C29.9124 28.2839 30.2602 27.6151 30.6223 26.9559C31.0463 26.1915 31.4942 25.432 31.9849 24.7059C33.3856 22.6327 35.7439 21.5149 34.8053 24.2951C34.7386 24.5148 34.6481 24.7298 34.5528 24.9352C34.3623 25.3412 34.1383 25.7282 33.8811 26.1008C33.6333 26.4686 33.3522 26.8173 33.0521 27.1469C32.9044 27.3046 32.7567 27.4574 32.5995 27.6055C33.7191 27.2664 35.3151 27.0848 36.0488 28.2265C36.4681 28.0498 36.9207 27.8969 37.3637 27.7918C37.359 27.7871 37.3542 27.7871 37.3542 27.7823C36.773 27.1995 37.5496 26.4829 38.0689 27.1613C38.1356 27.2425 38.1832 27.3332 38.207 27.4336C38.2356 27.553 38.2261 27.6676 38.1784 27.7775C38.1784 27.7823 38.1737 27.7823 38.1737 27.7871C38.7644 28.2552 37.8545 29.01 38.5501 29.2918C38.9693 29.4829 39.379 28.6421 39.5029 28.303C39.4839 28.1883 39.4791 28.0737 39.4934 27.959C39.5124 27.8109 39.5553 27.6724 39.6268 27.5482C40.2176 26.3922 41.2657 27.6103 40.189 28.1501C40.1223 28.1835 40.0556 28.2122 39.9793 28.2313C40.1318 29.3587 41.604 28.3842 41.9089 27.8539C41.9089 27.8492 41.9089 27.8444 41.9089 27.8348C41.9089 27.51 42.3853 27.5291 42.3853 27.8253C42.3853 28.0068 42.1852 28.5848 42.3138 28.6469C42.4758 28.7281 42.8998 28.0116 42.9904 27.8109C43.1047 27.553 43.4906 27.6629 43.4382 27.959C43.381 28.1931 43.3286 28.4511 43.3143 28.6947C43.2715 29.5832 43.786 28.9479 43.9003 28.3364C43.4287 27.6294 44.4768 26.803 44.3482 28.217C44.4053 28.2504 44.4768 28.2695 44.5435 28.2839C45.1152 28.4033 45.8299 28.0402 45.9585 27.959C46.0157 27.9208 46.1586 27.916 46.1443 28.0737C46.0967 28.4702 44.7103 28.795 44.2719 28.6278C43.9909 29.7838 42.8951 29.9415 42.8522 28.8093C42.5235 29.1485 41.9946 29.3252 41.8279 28.7233C41.8183 28.6804 41.8136 28.6326 41.8088 28.5848C41.2705 29.0768 40.27 29.6023 39.7221 28.8571C39.7221 28.8571 39.7221 28.8571 39.7221 28.8523C38.9121 30.5434 37.3876 29.5641 37.8735 28.4081C37.8926 28.3603 37.9307 28.2743 37.9355 28.2265L37.7544 28.0976C37.2208 28.1835 36.7301 28.3603 36.2299 28.5657C37.3352 31.4223 27.6446 35.8649 28.7261 33.4096C29.1025 32.5449 31.0463 31.1309 31.8562 30.5768C33.0378 29.7647 34.3098 29.0052 35.62 28.4081ZM17.5491 28.3603C17.5301 28.4224 17.511 28.4797 17.492 28.5418C17.6254 28.8858 17.9398 28.7186 18.0494 28.4558C17.8826 28.4415 17.7111 28.4081 17.5491 28.3603ZM17.673 27.9017C17.7921 27.9351 17.9112 27.959 18.0303 27.9781C18.0732 27.9877 18.1161 27.9877 18.159 27.9925C18.1971 26.9797 17.2823 27.3428 17.2728 27.6294C17.3014 27.6008 17.33 27.5721 17.3633 27.5482C17.411 27.5052 17.4729 27.4909 17.5396 27.5004C17.6015 27.5148 17.6539 27.5434 17.6921 27.596C17.7302 27.6437 17.7492 27.7058 17.7397 27.768C17.7302 27.8205 17.7064 27.8635 17.673 27.9017ZM20.3743 26.9845C20.4792 26.76 20.5744 26.5307 20.6697 26.3014C20.765 26.0626 20.8555 25.8189 20.9413 25.5753C21.0604 25.2266 21.3605 24.276 21.2176 23.9559C20.9794 24.2903 20.7793 24.9448 20.6697 25.346C20.603 25.5944 20.5459 25.8428 20.4982 26.096C20.441 26.3874 20.4029 26.6884 20.3743 26.9845ZM23.7427 27.2998C23.9618 27.0275 24.1619 26.7409 24.3335 26.44C24.4573 26.2202 24.5717 25.9909 24.667 25.7568C24.7575 25.5228 24.8337 25.2839 24.8861 25.0355C24.9242 24.8636 25.0052 24.3333 24.9004 24.1804C24.7432 24.2903 24.5431 24.7059 24.4573 24.897C24.3525 25.1311 24.262 25.3699 24.1762 25.6183C23.9904 26.1629 23.838 26.7266 23.7427 27.2998ZM23.19 28.0116C23.1996 27.916 23.2043 27.8157 23.2139 27.7202C23.1186 27.4909 22.9995 27.5912 22.8756 27.7441C22.4897 28.2648 22.9328 28.7807 23.19 28.0116ZM35.8154 28.7472C34.5099 29.3252 33.2522 30.1039 32.0802 30.9112C23.3711 36.9063 36.9683 31.6086 35.8154 28.7472Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.0209 16.7236L28.9547 17.0532L29.4359 17.8414L29.5836 18.429L29.6265 19.2601L29.374 19.9767L28.7355 20.6407L28.1067 20.7697L27.3777 20.6837L26.806 20.1391L26.3296 19.1407L26.4201 18.0134L26.7441 17.3302L27.4301 16.8334L28.0209 16.7236Z"
                fill="#C86524"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.6256 16.6089C27.7257 16.5898 27.7828 16.5946 27.8829 16.6089C27.9401 16.6185 27.9829 16.6185 28.0353 16.6042C28.3831 16.5229 28.8453 16.7809 29.0835 17.0245C29.4742 17.4258 29.66 17.7793 29.7505 18.3334C29.8362 18.8684 29.7743 19.5229 29.5027 20.0006C29.2931 20.3684 28.993 20.7458 28.5642 20.8461C28.4403 20.8748 28.3212 20.8795 28.1926 20.87C28.1402 20.8652 28.0211 20.8509 27.9686 20.8604C27.8067 20.8987 27.6828 20.8843 27.5256 20.827C26.8443 20.5738 26.344 19.8573 26.244 19.1455C26.1296 18.3382 26.325 17.4831 26.9681 16.9433C27.1873 16.7618 27.3398 16.6567 27.6256 16.6089ZM28.0687 16.8717C28.0592 16.9576 28.164 17.2156 28.2164 17.292L28.6118 17.0484C28.4975 16.972 28.1878 16.8621 28.0687 16.8717ZM27.9591 18.3334C28.0306 18.2044 28.0782 17.679 28.0544 17.5213C27.7257 17.7411 27.597 17.9465 27.5303 18.0229C27.7209 17.636 28.0163 17.4783 28.0544 17.3828C28.0782 17.3207 28.0353 17.2013 28.0163 17.144C27.8257 16.5325 26.8681 17.2634 26.9205 17.4353C27.0015 17.6933 27.6828 18.2761 27.9591 18.3334ZM29.4551 18.4528C29.2884 18.5484 28.6261 18.6248 28.3403 18.5054C28.4737 18.5388 28.9549 18.5532 29.4265 18.3239C29.436 18.1471 29.2931 17.8318 29.2074 17.679C29.1407 17.55 28.8548 17.0771 28.669 17.144C28.588 17.1726 28.3164 17.3255 28.2497 17.3876C28.2974 17.6408 28.4641 17.8271 28.2497 18.7586C28.1402 19.1789 27.9591 19.6662 28.0258 20.1009C28.0496 20.2585 28.1306 20.5452 28.2974 20.6073C28.4451 20.6646 28.7262 20.5022 28.8262 20.3971C29.012 20.206 29.3503 19.6949 29.3836 19.4082C29.2312 19.6853 28.7309 19.9624 28.407 20.0101C28.7119 19.9528 29.417 19.3748 29.4646 19.0165C29.4932 18.8302 29.4885 18.6344 29.4551 18.4528ZM26.83 17.507C26.6728 17.6121 26.5251 18.2092 26.5013 18.386C26.4727 18.5675 26.4631 18.5579 26.5632 18.7156C26.9539 19.3175 26.8729 20.2538 27.4303 20.4639C27.154 20.1439 27.173 19.3318 27.1968 19.0977C27.2302 19.628 27.3636 20.8604 27.9115 20.5356C28.0115 20.4783 27.921 20.3206 27.8972 20.2394C27.7161 19.585 27.7114 19.4369 27.8686 18.7729C27.8877 18.6869 27.9448 18.5149 27.9448 18.4337C27.9496 18.343 27.0968 18.0134 26.83 17.507ZM26.9396 19.991C26.8443 19.7187 26.7109 18.9974 26.487 18.8111C26.4536 19.093 26.6346 19.6041 26.7919 19.8286C26.8062 19.8525 26.9872 20.12 26.9396 19.991Z"
                fill="white"
              />
              <path
                d="M20.3218 37.0926H20.6839V38.3872H20.3218V37.0926ZM22.7087 37.0926V38.3872H22.4085L21.8368 37.6993V38.3872H21.4795V37.0926H21.7796L22.3514 37.7805V37.0926H22.7087ZM23.4995 37.0926H24.1094C24.2523 37.0926 24.3762 37.1213 24.4858 37.1738C24.5953 37.2264 24.6811 37.3028 24.7383 37.3983C24.8002 37.4939 24.8288 37.6085 24.8288 37.7375C24.8288 37.8713 24.8002 37.9859 24.7383 38.0814C24.6811 38.177 24.5953 38.2534 24.4858 38.306C24.3762 38.3585 24.2523 38.3872 24.1094 38.3872H23.4995V37.0926ZM24.0951 38.0958C24.2047 38.0958 24.2952 38.0623 24.3619 38.0002C24.4286 37.9381 24.4619 37.8521 24.4619 37.7375C24.4619 37.6276 24.4286 37.5416 24.3619 37.4795C24.2952 37.4174 24.2047 37.384 24.0951 37.384H23.8664V38.0958H24.0951ZM26.2104 38.4111C26.0723 38.4111 25.9484 38.3824 25.8388 38.3251C25.734 38.2677 25.6482 38.1865 25.5863 38.0862C25.5244 37.9811 25.491 37.8665 25.491 37.7375C25.491 37.6133 25.5244 37.4987 25.5863 37.3936C25.6482 37.2932 25.734 37.212 25.8388 37.1547C25.9484 37.0974 26.0723 37.0687 26.2104 37.0687C26.3438 37.0687 26.4677 37.0974 26.5773 37.1547C26.6868 37.212 26.7678 37.2932 26.8298 37.3936C26.8917 37.4987 26.9251 37.6133 26.9251 37.7375C26.9251 37.8665 26.8917 37.9811 26.8298 38.0862C26.7678 38.1865 26.6868 38.2677 26.5773 38.3251C26.4677 38.3824 26.3438 38.4111 26.2104 38.4111ZM26.2104 38.1101C26.2724 38.1101 26.3343 38.0958 26.3867 38.0623C26.4391 38.0337 26.482 37.9907 26.5106 37.9334C26.5392 37.876 26.5582 37.8139 26.5582 37.7375C26.5582 37.6658 26.5392 37.6037 26.5106 37.5464C26.482 37.4891 26.4391 37.4461 26.3867 37.4174C26.3343 37.384 26.2724 37.3697 26.2104 37.3697C26.1437 37.3697 26.0865 37.384 26.0294 37.4174C25.977 37.4461 25.9389 37.4891 25.9055 37.5464C25.8769 37.6037 25.8626 37.6658 25.8626 37.7375C25.8626 37.8139 25.8769 37.876 25.9055 37.9334C25.9389 37.9907 25.977 38.0337 26.0294 38.0623C26.0865 38.0958 26.1437 38.1101 26.2104 38.1101ZM28.8784 37.0926V38.3872H28.5783L28.0113 37.6993V38.3872H27.654V37.0926H27.9541L28.5211 37.7805V37.0926H28.8784ZM30.7079 38.1053V38.3872H29.674V37.0926H30.6841V37.3745H30.0314V37.5942H30.6078V37.8665H30.0314V38.1053H30.7079ZM31.899 38.4111C31.7941 38.4111 31.6941 38.3967 31.5941 38.3728C31.4988 38.349 31.4178 38.3107 31.3558 38.2677L31.4749 38.0002C31.5321 38.0385 31.5988 38.0671 31.675 38.091C31.7513 38.1149 31.8275 38.1292 31.899 38.1292C32.0419 38.1292 32.1134 38.091 32.1134 38.0241C32.1134 37.9859 32.0895 37.9572 32.0514 37.9381C32.0133 37.9238 31.9466 37.9047 31.8608 37.8856C31.7608 37.8617 31.6798 37.8378 31.6179 37.8139C31.5512 37.79 31.494 37.7518 31.4464 37.6993C31.4035 37.6467 31.3797 37.5751 31.3797 37.4843C31.3797 37.4079 31.3987 37.3362 31.4416 37.2741C31.4845 37.212 31.5512 37.1595 31.6369 37.1213C31.7227 37.0878 31.8275 37.0687 31.9514 37.0687C32.0324 37.0687 32.1181 37.0783 32.1991 37.0974C32.2801 37.1165 32.3563 37.1452 32.4183 37.1786L32.3039 37.4509C32.1801 37.384 32.0609 37.3506 31.9466 37.3506C31.8751 37.3506 31.8227 37.3601 31.7894 37.384C31.756 37.4079 31.737 37.4318 31.737 37.47C31.737 37.5034 31.7608 37.5273 31.7989 37.5464C31.837 37.5608 31.899 37.5799 31.9895 37.599C32.0848 37.6181 32.1658 37.642 32.2325 37.6658C32.2944 37.6897 32.3516 37.7279 32.3992 37.7805C32.4469 37.833 32.4707 37.9047 32.4707 37.9955C32.4707 38.0719 32.4469 38.1435 32.404 38.2056C32.3611 38.2677 32.2992 38.3155 32.2134 38.3537C32.1276 38.3919 32.0228 38.4111 31.899 38.4111ZM33.1758 37.0926H33.5379V38.3872H33.1758V37.0926ZM35.1958 38.134H34.6527L34.5527 38.3872H34.1811L34.748 37.0926H35.1101L35.677 38.3872H35.3007L35.1958 38.134ZM35.091 37.8665L34.9243 37.4509L34.7575 37.8665H35.091Z"
                fill="white"
              />
            </svg>
            <div className="text-left text-white">
              <p>COLDBREW ROASTERS</p>
              <p className="text-sm">We Provied Good Coffee, Etc</p>
            </div>
            <div>
              <button className="bg-white rounded-md">
                <p className="px-6 py-1 font-bold text-md text-red-600">
                  Follow
                </p>
              </button>
            </div>
          </button>
        </div>
        <div className="border-b border-t w-full h-auto p-5">
          <div>
            <p className="font-bold text-md">Pengiriman</p>
          </div>
          <div className="flex items-center gap-x-3">
            <svg
              width="10"
              height="15"
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.03125C6.03553 7.03125 6.875 6.19178 6.875 5.15625C6.875 4.12072 6.03553 3.28125 5 3.28125C3.96447 3.28125 3.125 4.12072 3.125 5.15625C3.125 6.19178 3.96447 7.03125 5 7.03125Z"
                stroke="#414141"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.74993 7.03125C7.34368 10.3125 4.99993 14.0625 4.99993 14.0625C4.99993 14.0625 2.65618 10.3125 1.24993 7.03125C-0.156319 3.75 2.18743 0.9375 4.99993 0.9375C7.81243 0.9375 10.1562 3.75 8.74993 7.03125Z"
                stroke="#414141"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>Dikirim dari Kab. Badung</div>
          </div>
          <div className="flex flex-row items-center gap-x-3">
            <div>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.46 5.805L12.96 2.305C12.9217 2.21463 12.8577 2.13752 12.7759 2.08328C12.6941 2.02904 12.5981 2.00008 12.5 2H11V1C11 0.867392 10.9473 0.740215 10.8536 0.646447C10.7598 0.552679 10.6326 0.5 10.5 0.5H1C0.867392 0.5 0.740215 0.552679 0.646447 0.646447C0.552678 0.740215 0.5 0.867392 0.5 1V9.5C0.5 9.63261 0.552678 9.75979 0.646447 9.85355C0.740215 9.94732 0.867392 10 1 10H2.07C2.18514 10.4237 2.4365 10.7977 2.7853 11.0644C3.1341 11.331 3.56095 11.4755 4 11.4755C4.43905 11.4755 4.8659 11.331 5.2147 11.0644C5.5635 10.7977 5.81486 10.4237 5.93 10H9.07C9.18514 10.4237 9.4365 10.7977 9.7853 11.0644C10.1341 11.331 10.5609 11.4755 11 11.4755C11.4391 11.4755 11.8659 11.331 12.2147 11.0644C12.5635 10.7977 12.8149 10.4237 12.93 10H14C14.1326 10 14.2598 9.94732 14.3536 9.85355C14.4473 9.75979 14.5 9.63261 14.5 9.5V6C14.4999 5.93298 14.4863 5.86666 14.46 5.805ZM11 3H12.17L13.24 5.5H11V3ZM4 10.5C3.80222 10.5 3.60888 10.4414 3.44443 10.3315C3.27998 10.2216 3.15181 10.0654 3.07612 9.88268C3.00043 9.69996 2.98063 9.49889 3.01921 9.30491C3.0578 9.11093 3.15304 8.93275 3.29289 8.79289C3.43275 8.65304 3.61093 8.5578 3.80491 8.51921C3.99889 8.48063 4.19996 8.50043 4.38268 8.57612C4.56541 8.65181 4.72159 8.77998 4.83147 8.94443C4.94135 9.10888 5 9.30222 5 9.5C5 9.76522 4.89464 10.0196 4.70711 10.2071C4.51957 10.3946 4.26522 10.5 4 10.5ZM9.07 9H5.93C5.81486 8.57631 5.5635 8.20229 5.2147 7.93563C4.8659 7.66897 4.43905 7.5245 4 7.5245C3.56095 7.5245 3.1341 7.66897 2.7853 7.93563C2.4365 8.20229 2.18514 8.57631 2.07 9H1.5V1.5H10V7.78C9.77232 7.91214 9.57297 8.08793 9.41338 8.29729C9.25379 8.50665 9.1371 8.74545 9.07 9ZM11 10.5C10.8022 10.5 10.6089 10.4414 10.4444 10.3315C10.28 10.2216 10.1518 10.0654 10.0761 9.88268C10.0004 9.69996 9.98063 9.49889 10.0192 9.30491C10.0578 9.11093 10.153 8.93275 10.2929 8.79289C10.4327 8.65304 10.6109 8.5578 10.8049 8.51921C10.9989 8.48063 11.2 8.50043 11.3827 8.57612C11.5654 8.65181 11.7216 8.77998 11.8315 8.94443C11.9414 9.10888 12 9.30222 12 9.5C12 9.76522 11.8946 10.0196 11.7071 10.2071C11.5196 10.3946 11.2652 10.5 11 10.5ZM13.5 9H12.93C12.8194 8.57176 12.57 8.19225 12.2208 7.92084C11.8716 7.64944 11.4423 7.50144 11 7.5V6.5H13.5V9Z"
                  fill="#414141"
                />
              </svg>
            </div>
            <div>
              <p>Ongkir Reguler 16rb - 24rb</p>
              <p>Estimasi tiba besok - 10 May</p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-3">
            <div className="pl-6">Kurir lainnya :</div>
            <button className="text-red-600 font-bold">
              Lihat Pilihan Kurir
            </button>
          </div>
        </div>
        <div className="border w-full h-auto p-3 gap-x-4 flex items-center justify-end rounded-md">
          <div className="flex items-center">
            <div>
              <p>Langsung hubungi penjual</p>
            </div>
            <div className="flex items-center px-4 py-2 border-l-2 ml-4 gap-x-2">
              <button>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="34" height="34" rx="17" fill="#D63031" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.1241 18.7865C20.8995 18.6748 19.7985 18.1363 19.5935 18.0613C19.3885 17.987 19.2393 17.9503 19.0894 18.1738C18.9401 18.3958 18.5113 18.8983 18.381 19.0468C18.2498 19.196 18.1195 19.214 17.8956 19.103C17.6718 18.9905 16.9499 18.7558 16.0945 17.9968C15.4291 17.4058 14.9792 16.676 14.8488 16.4525C14.7184 16.2298 14.8345 16.109 14.9468 15.998C15.0478 15.8983 15.1706 15.7378 15.2829 15.608C15.3952 15.4775 15.4321 15.3845 15.5067 15.2353C15.5821 15.0868 15.5444 14.957 15.4879 14.8453C15.4321 14.7335 14.9845 13.6363 14.7976 13.19C14.6159 12.7558 14.4313 12.815 14.2941 12.8075C14.163 12.8015 14.0138 12.8 13.8646 12.8C13.7154 12.8 13.4727 12.8555 13.2677 13.079C13.062 13.3018 12.484 13.841 12.484 14.9383C12.484 16.0348 13.2858 17.0945 13.3981 17.2438C13.5104 17.3923 14.9769 19.6438 17.2234 20.609C17.7585 20.8385 18.1752 20.9758 18.5 21.0778C19.0366 21.248 19.5249 21.224 19.9108 21.1663C20.3404 21.1025 21.2356 20.627 21.4225 20.1065C21.6087 19.586 21.6087 19.1398 21.5529 19.0468C21.4971 18.9538 21.3479 18.8983 21.1234 18.7865H21.1241ZM17.038 24.3388H17.035C15.7007 24.339 14.3909 23.982 13.2429 23.3053L12.9716 23.1448L10.1516 23.8813L10.9044 21.1453L10.7273 20.8648C9.98134 19.683 9.58657 18.3153 9.58861 16.9198C9.59012 12.8323 12.9316 9.50678 17.041 9.50678C19.0306 9.50678 20.901 10.2793 22.3073 11.6803C23.0009 12.3677 23.5506 13.1852 23.9247 14.0854C24.2988 14.9857 24.4898 15.9508 24.4867 16.925C24.4852 21.0125 21.1437 24.3388 17.038 24.3388ZM23.3774 10.616C22.5471 9.78422 21.5591 9.12468 20.4708 8.67563C19.3825 8.22658 18.2154 7.99694 17.0373 8.00003C12.0981 8.00003 8.07687 12.0013 8.07536 16.919C8.07307 18.4841 8.48561 20.022 9.27134 21.3778L8 26L12.7508 24.7595C14.065 25.4721 15.5377 25.8455 17.0343 25.8455H17.038C21.9772 25.8455 25.9984 21.8443 26 16.9258C26.0036 15.7537 25.7737 14.5926 25.3235 13.5095C24.8734 12.4265 24.2119 11.443 23.3774 10.616Z"
                    fill="#D63031"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.1241 18.7865C20.8995 18.6748 19.7985 18.1363 19.5935 18.0613C19.3885 17.987 19.2393 17.9503 19.0894 18.1738C18.9401 18.3958 18.5113 18.8983 18.381 19.0468C18.2498 19.196 18.1195 19.214 17.8956 19.103C17.6718 18.9905 16.9499 18.7558 16.0945 17.9968C15.4291 17.4058 14.9792 16.676 14.8488 16.4525C14.7184 16.2298 14.8345 16.109 14.9468 15.998C15.0478 15.8983 15.1706 15.7378 15.2829 15.608C15.3952 15.4775 15.4321 15.3845 15.5067 15.2353C15.5821 15.0868 15.5444 14.957 15.4879 14.8453C15.4321 14.7335 14.9845 13.6363 14.7976 13.19C14.6159 12.7558 14.4313 12.815 14.2941 12.8075C14.163 12.8015 14.0138 12.8 13.8646 12.8C13.7154 12.8 13.4727 12.8555 13.2677 13.079C13.062 13.3018 12.484 13.841 12.484 14.9383C12.484 16.0348 13.2858 17.0945 13.3981 17.2438C13.5104 17.3923 14.9769 19.6438 17.2234 20.609C17.7585 20.8385 18.1752 20.9758 18.5 21.0778C19.0366 21.248 19.5249 21.224 19.9108 21.1663C20.3404 21.1025 21.2356 20.627 21.4225 20.1065C21.6087 19.586 21.6087 19.1398 21.5529 19.0468C21.4971 18.9538 21.3479 18.8983 21.1234 18.7865H21.1241ZM17.038 24.3388H17.035C15.7007 24.339 14.3909 23.982 13.2429 23.3053L12.9716 23.1448L10.1516 23.8813L10.9044 21.1453L10.7273 20.8648C9.98134 19.683 9.58657 18.3153 9.58861 16.9198C9.59012 12.8323 12.9316 9.50678 17.041 9.50678C19.0306 9.50678 20.901 10.2793 22.3073 11.6803C23.0009 12.3677 23.5506 13.1852 23.9247 14.0854C24.2988 14.9857 24.4898 15.9508 24.4867 16.925C24.4852 21.0125 21.1437 24.3388 17.038 24.3388ZM23.3774 10.616C22.5471 9.78422 21.5591 9.12468 20.4708 8.67563C19.3825 8.22658 18.2154 7.99694 17.0373 8.00003C12.0981 8.00003 8.07687 12.0013 8.07536 16.919C8.07307 18.4841 8.48561 20.022 9.27134 21.3778L8 26L12.7508 24.7595C14.065 25.4721 15.5377 25.8455 17.0343 25.8455H17.038C21.9772 25.8455 25.9984 21.8443 26 16.9258C26.0036 15.7537 25.7737 14.5926 25.3235 13.5095C24.8734 12.4265 24.2119 11.443 23.3774 10.616Z"
                    fill="white"
                  />
                </svg>
              </button>
              <p>Chat penjual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
