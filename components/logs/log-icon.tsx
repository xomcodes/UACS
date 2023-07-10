import React from "react";

export const LogIcon = ({
  color,
  variant,
  size,
}: {
  color?: string;
  size: string;
  variant: string;
}) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3005 13.5844C17.5278 13.1391 17.7892 12.4456 17.8986 12.045C18.0275 11.576 18.1083 10.9231 18.1353 10.2326L18.1353 10.2324C18.1531 9.76131 18.158 9.45898 18.1314 9.16918C18.1047 8.87828 18.0468 8.60456 17.9441 8.18969L17.9438 8.18875C17.808 7.65504 17.5287 6.88079 17.3105 6.4266L17.3105 6.42659L17.3094 6.42442C17.0822 5.97042 16.649 5.29409 16.3301 4.90275C16.0122 4.51263 15.4529 3.95373 15.0793 3.65333C14.7052 3.35252 14.0287 2.92917 13.5834 2.71114C13.1359 2.48323 12.3698 2.20439 11.89 2.07777L11.89 2.07776L11.888 2.07728C11.1627 1.89612 10.7938 1.85036 9.93611 1.85938L9.93606 1.85938C9.107 1.86838 8.68451 1.92289 8.04674 2.09582L8.04674 2.09581L8.04483 2.09635C7.60631 2.22152 6.97543 2.43709 6.6437 2.59332C6.31351 2.74013 5.77302 3.04644 5.42118 3.28076L5.42117 3.28075L5.41968 3.28177C5.07474 3.51754 4.54215 3.95023 4.24101 4.25106C3.94255 4.54922 3.5082 5.05487 3.28751 5.38557C3.071 5.71001 2.75541 6.25003 2.59094 6.60583C2.42613 6.95362 2.20993 7.56631 2.10143 7.96367C1.97255 8.43268 1.89165 9.08566 1.86472 9.77621L1.86471 9.7764C1.84692 10.2475 1.84199 10.5498 1.86857 10.8396C1.89526 11.1305 1.95325 11.4042 2.05595 11.8191L2.05595 11.8191L2.05619 11.82C2.19202 12.3537 2.47128 13.128 2.68952 13.5822L2.68948 13.5822L2.69113 13.5854C2.91769 14.029 3.35057 14.7141 3.66989 15.106C3.98775 15.4962 4.5471 16.055 4.9207 16.3554C5.29423 16.6558 5.96198 17.0795 6.41761 17.2982C6.87277 17.5254 7.62949 17.8042 8.11004 17.931L8.11197 17.9315C8.80073 18.1035 9.23136 18.1583 10 18.1583C10.7683 18.1583 11.2082 18.1036 11.8801 17.9313L11.8804 17.9312C12.3702 17.8043 13.1365 17.5252 13.5823 17.3071C14.0274 17.0893 14.695 16.6748 15.0686 16.3835L15.0687 16.3836L15.0718 16.381C15.4345 16.082 16.0031 15.5233 16.3223 15.1225C16.64 14.7234 17.0817 14.0303 17.3005 13.5844ZM17.3005 13.5844C17.3007 13.584 17.3009 13.5836 17.3011 13.5833L17.1664 13.5172L17.3 13.5854C17.3001 13.5851 17.3003 13.5847 17.3005 13.5844ZM12.2551 5.94141C12.341 5.93577 12.4296 5.96064 12.5024 5.99369C12.5776 6.02784 12.6526 6.07824 12.7089 6.13988C12.7356 6.16788 12.7584 6.20654 12.7772 6.24114C12.7992 6.28192 12.8252 6.33545 12.8554 6.4025C12.916 6.53688 12.9975 6.73326 13.1052 7.00692C13.3155 7.54133 13.6283 8.37694 14.0858 9.63576L14.732 9.65882C14.732 9.65882 14.7321 9.65882 14.7322 9.65882C15.0092 9.66775 15.2173 9.68353 15.3732 9.71372C15.5269 9.74346 15.6497 9.79066 15.7384 9.87772C15.7961 9.93037 15.8455 9.99699 15.88 10.0617C15.9101 10.1183 15.9431 10.1999 15.9364 10.2801C15.9342 10.3446 15.9098 10.4191 15.8857 10.4792C15.8581 10.5482 15.8209 10.6226 15.7807 10.6878L15.7778 10.6924L15.7777 10.6924C15.7442 10.7427 15.7035 10.7981 15.64 10.8419C15.576 10.8861 15.5016 10.9102 15.4128 10.925C15.2437 10.9531 14.9695 10.9548 14.4957 10.9548C14.2132 10.9548 13.939 10.9481 13.7255 10.9368C13.619 10.9312 13.526 10.9243 13.4539 10.9164C13.4181 10.9124 13.3855 10.908 13.3582 10.9029C13.3359 10.8988 13.3011 10.8916 13.2713 10.8767L13.2655 10.8738L13.2656 10.8737C13.2244 10.8508 13.1952 10.813 13.1799 10.7922C13.1602 10.7654 13.1398 10.7327 13.1193 10.6968C13.078 10.6246 13.03 10.5288 12.9786 10.4175C12.8753 10.1942 12.7537 9.89929 12.6369 9.58532C12.5214 9.27466 12.4129 8.99152 12.3302 8.78658C12.3294 8.78455 12.3286 8.78254 12.3277 8.78053C12.2869 8.89773 12.2374 9.04309 12.1809 9.21166C12.0232 9.68199 11.812 10.3303 11.5852 11.0456C11.3268 11.8691 11.1058 12.5337 10.9367 13.0023C10.8523 13.2363 10.7802 13.4233 10.7224 13.5573C10.6936 13.6241 10.6672 13.6803 10.6438 13.7235C10.6321 13.745 10.6199 13.7656 10.6072 13.7836C10.5969 13.7984 10.5791 13.8219 10.5539 13.841M12.2551 5.94141L12.2415 8.57469C12.1038 8.95558 11.7914 9.89908 11.4422 11.0004C10.9258 12.6457 10.5608 13.6506 10.4629 13.7218C10.3828 13.784 10.2315 13.8285 10.1335 13.8374C10.0356 13.8374 9.89317 13.7662 9.82195 13.6862C9.75192 13.5987 9.27731 12.5998 7.86484 9.41239L7.76748 9.56291M12.2551 5.94141C12.1739 5.94268 12.0913 5.96875 12.0227 6.00173C11.9516 6.03584 11.8806 6.0845 11.8286 6.14284L11.9407 6.24255L11.8293 6.14215C11.8109 6.16257 11.7973 6.1871 11.7892 6.2024C11.7792 6.22111 11.7687 6.24333 11.7579 6.26776C11.7361 6.31683 11.71 6.38149 11.6804 6.45877C11.6211 6.6137 11.5454 6.82566 11.4584 7.07864C11.2842 7.58494 11.0634 8.25991 10.8362 8.98105L10.8359 8.98186C10.6136 9.70146 10.4024 10.3632 10.2436 10.8493C10.1748 11.0596 10.116 11.2368 10.0703 11.3714M12.2551 5.94141L10.1676 11.55C10.1615 11.5397 10.1547 11.5279 10.1472 11.5146C10.1253 11.476 10.0996 11.4279 10.0703 11.3714M10.5539 13.841C10.553 13.8417 10.552 13.8424 10.5511 13.8431L10.4629 13.7218L10.555 13.8402C10.5546 13.8405 10.5543 13.8407 10.5539 13.841ZM10.5539 13.841C10.4949 13.8866 10.4195 13.9195 10.3523 13.9419C10.2831 13.9649 10.2094 13.9811 10.1471 13.9868L10.1335 13.988V13.9874C10.0532 13.9874 9.96978 13.9598 9.90176 13.9265C9.83249 13.8926 9.76168 13.8441 9.70989 13.7859L9.70471 13.7801L9.70487 13.78C9.68575 13.7561 9.66398 13.7174 9.64223 13.6767C9.61796 13.6313 9.58638 13.5689 9.54661 13.4877C9.46697 13.3251 9.35261 13.0829 9.19497 12.7407C8.89596 12.0915 8.44001 11.0799 7.76748 9.56291M7.76748 9.56291C7.74354 9.50892 7.71933 9.45429 7.69485 9.39901L7.41832 9.82652C7.20467 10.1467 6.9554 10.4935 6.84857 10.6091C6.67053 10.7959 6.59041 10.8048 5.53103 10.8048C4.40043 10.8048 4.39153 10.8048 4.24019 10.5736M7.76748 9.56291L7.54427 9.90799L7.54311 9.9098L7.54309 9.90979C7.33061 10.2282 7.07497 10.5851 6.95874 10.7109L6.95716 10.7126L6.95714 10.7126C6.90984 10.7622 6.8587 10.8114 6.78904 10.8498C6.71896 10.8885 6.64012 10.9111 6.54202 10.9254C6.35367 10.953 6.05482 10.9548 5.53103 10.9548H5.49725C4.96267 10.9548 4.66774 10.9548 4.49212 10.9236C4.39555 10.9064 4.31795 10.8774 4.25181 10.8234C4.19279 10.7751 4.15239 10.7134 4.11791 10.6606L4.11542 10.6568M4.11542 10.6568L4.24019 10.5736M4.11542 10.6568L4.11468 10.6557L4.24019 10.5736M4.11542 10.6568C4.04967 10.5583 3.98475 10.4598 3.97704 10.3482C3.96898 10.2314 4.02427 10.1288 4.08395 10.0266L4.08489 10.025L4.08489 10.025C4.11822 9.9695 4.16042 9.89955 4.24203 9.84611C4.32014 9.79495 4.4196 9.76787 4.55061 9.74918C4.80325 9.71312 5.25152 9.69948 6.08989 9.67852M4.24019 10.5736C4.09775 10.3601 4.08885 10.3157 4.21348 10.1022C4.34702 9.87988 4.38263 9.87099 6.172 9.82652M6.172 9.82652L6.04675 9.74398L6.08989 9.67852M6.172 9.82652L6.87528 8.75934C7.49845 7.81665 7.61418 7.69215 7.83673 7.69215M6.172 9.82652L6.16827 9.67657C6.14177 9.67723 6.11565 9.67788 6.08989 9.67852M6.08989 9.67852L6.75003 8.6768L6.75015 8.67662C7.05958 8.20854 7.25104 7.93086 7.39496 7.77165C7.46816 7.69066 7.53726 7.63079 7.61222 7.59264C7.68919 7.55348 7.76161 7.54263 7.83193 7.54216M7.83193 7.54216C7.8302 7.54226 7.82848 7.54237 7.82677 7.54248L7.83673 7.69215M7.83193 7.54216C7.83353 7.54215 7.83513 7.54215 7.83673 7.54215V7.69215M7.83193 7.54216C7.92502 7.53697 8.02312 7.5586 8.10753 7.59104C8.19345 7.62405 8.28004 7.67397 8.34335 7.73721L8.34894 7.74279L8.34878 7.74293C8.37107 7.76767 8.39402 7.80554 8.41341 7.83921C8.43549 7.87755 8.46207 7.92689 8.49224 7.98513C8.55269 8.10182 8.62998 8.2588 8.71875 8.44453C8.89642 8.81625 9.12179 9.30666 9.35364 9.8278L9.35408 9.82879L9.35408 9.82879C9.5805 10.3477 9.79324 10.8103 9.95338 11.138C9.99674 11.2267 10.0359 11.3049 10.0703 11.3714M7.83673 7.69215C7.97027 7.68325 8.14831 7.7544 8.23734 7.84333C8.31746 7.93227 8.75367 8.84827 9.21659 9.88878C9.54736 10.6468 9.84978 11.2869 10.0034 11.5647C10.0159 11.5298 10.0315 11.485 10.0499 11.4312C10.0564 11.4123 10.0632 11.3924 10.0703 11.3714M10.1068 11.7119C10.1118 11.7052 10.13 11.6572 10.1592 11.574C10.1548 11.5721 10.1501 11.5704 10.1449 11.5689C10.1121 11.5592 10.0616 11.5589 10.018 11.591C10.0371 11.6247 10.0535 11.6518 10.0669 11.6719L10.1068 11.7119ZM10.1068 11.7119L10.0822 11.6934C10.0945 11.7094 10.1029 11.7158 10.1068 11.7119ZM3.63325 7.74373L3.63328 7.74374L3.63433 7.74066C3.7558 7.3853 4.00104 6.85164 4.1654 6.56646C4.32445 6.29049 4.81163 5.70586 5.25424 5.2637C5.70307 4.81532 6.28807 4.33679 6.60283 4.14932C6.91574 3.97591 7.46687 3.73126 7.82284 3.60983C8.18042 3.48786 8.71475 3.35678 8.99868 3.3138C9.28519 3.27043 9.68666 3.23547 9.89626 3.22656C10.0939 3.22692 10.5642 3.26158 10.9405 3.31402C11.303 3.36578 11.9238 3.52283 12.3065 3.6617C12.6921 3.81065 13.2436 4.07336 13.5278 4.24538C13.8096 4.41601 14.3174 4.81763 14.6507 5.13312C14.9836 5.44816 15.4116 5.93766 15.5994 6.2191L15.5994 6.21911L15.6012 6.22166C15.8002 6.5069 16.0629 6.97908 16.193 7.26514C16.323 7.55081 16.4985 8.04142 16.5856 8.35486L16.5858 8.35551C16.6958 8.7441 16.7404 9.21637 16.7404 10.0044C16.7404 10.8787 16.705 11.2361 16.5505 11.7679L16.5503 11.7685C16.4457 12.1344 16.2352 12.6858 16.0886 12.9787L16.0878 12.9803C15.9418 13.2806 15.6093 13.8056 15.3557 14.1376C15.103 14.4685 14.6477 14.9578 14.3466 15.207C14.044 15.4574 13.4925 15.8162 13.1365 15.9983L13.1365 15.9983L13.134 15.9996C12.7787 16.19 12.1661 16.4348 11.7855 16.5385L11.7844 16.5388C11.2321 16.694 10.8729 16.7378 10 16.7377L9.9985 16.7378C9.11739 16.7466 8.77693 16.7027 8.24351 16.548L8.24201 16.5476C7.86793 16.4433 7.29885 16.2245 6.97936 16.0606L6.97939 16.0605L6.97505 16.0585C6.65119 15.9052 6.12795 15.5577 5.79289 15.3024C5.47255 15.0426 4.9913 14.5533 4.72137 14.2227C4.45302 13.8941 4.07664 13.2995 3.89481 12.919C3.71092 12.5341 3.50204 11.9671 3.43406 11.6615L3.43411 11.6615L3.43315 11.6577C3.35555 11.3476 3.27636 10.8134 3.24102 10.4784C3.20685 10.1276 3.22397 9.57173 3.29332 9.13879L3.29339 9.1388L3.29399 9.13408C3.34593 8.72763 3.50342 8.09822 3.63325 7.74373Z"
        fill={color || "currentColor"}
        stroke={color || "currentColor"}
        stroke-width="0.3"
      />
    </svg>
  );
};