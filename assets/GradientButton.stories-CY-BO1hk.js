import{j as v,d as g}from"./iframe-D9sBWA7i.js";import"./preload-helper-C1FmrZbK.js";function d({tone:p="positive",fullWidth:u,style:c,children:l,...m}){return v.jsx("button",{type:"button",...m,style:{height:48,padding:"0 20px",width:u?"100%":void 0,border:"none",borderRadius:16,fontWeight:600,fontSize:"0.875rem",color:"#ffffff",cursor:"pointer",background:g[p],...c},children:l})}d.__docgenInfo={description:`pw-oss 모바일웹의 공사시작(positive) / 공사취소(negative) 버튼과 동일한\r
그라데이션 톤앤매너. MUI Button 팔레트에 없는 브랜드 전용 CTA가 필요할 때 사용.`,methods:[],displayName:"GradientButton",props:{tone:{required:!1,tsType:{name:"union",raw:"'positive' | 'negative'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'positive'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const y={title:"라미 컴포넌트/GradientButton (그라데이션 버튼)",component:d,tags:["autodocs"],parameters:{docs:{description:{component:"모바일웹 공사시작/공사취소 버튼과 동일한 그라데이션 톤. 긍정(positive)은 블루-그린, 부정(negative)은 와인레드 계열로 구분해서 씁니다."}}},argTypes:{tone:{control:"radio",options:["positive","negative"],description:"버튼의 긍정/부정 톤"}}},e={name:"긍정 (공사시작)",args:{tone:"positive",children:"공사시작",fullWidth:!0}},t={name:"부정 (공사취소)",args:{tone:"negative",children:"공사취소",fullWidth:!0}};var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '긍정 (공사시작)',
  args: {
    tone: 'positive',
    children: '공사시작',
    fullWidth: true
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,a,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '부정 (공사취소)',
  args: {
    tone: 'negative',
    children: '공사취소',
    fullWidth: true
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const b=["Positive","Negative"];export{t as Negative,e as Positive,b as __namedExportsOrder,y as default};
