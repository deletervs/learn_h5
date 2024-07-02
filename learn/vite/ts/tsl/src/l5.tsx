// import React, { useState } from "react";
// // import { useForm } from "antd/lib/form/Form";
// import {
//     Form,
//     DatePicker,
//     Select,
//     Cascader,
//     InputNumber,
//     Button,
//     Col,
//     Row,
// } from "antd";
// import moment, { Moment } from 'moment'

// type RangeDateStamp = [Moment | null, Moment | null];

// function L5() {
//     const [dateRange, setDateRange] = useState<RangeDateStamp>([null, null]);
//     const [selectOption, setSelectOption] = useState<string | undefined>(undefined);
//     const [cascaderoption, setCascaderoption] = useState<string | undefined>(undefined);
//     const [inputNumber, setInputNumber] = useState<number | undefined>(undefined);
//     // const [Form]=useForm();

//     function onFinish() {
//         console.log();
//     };

//     ////
//     const optionsSelect = [
//         {
//             label: 'select 1',
//             value: 'select 1',
//         },
//         {
//             label: 'select 2',
//             value: 'select 2',
//         },
//     ];

//     ////
//     interface Option {
//         value: string | number;
//         label: string;
//         children?: Option[];
//     };

//     const optionCascader: Option[] = [
//         {
//             value: 'Option 1',
//             label: 'Option 1',
//         },
//         {
//             value: 'Option 2',
//             label: 'Option 2',
//             children: [
//                 {
//                     value: 'Option 2-1',
//                     label: 'Option 2-1',
//                 },
//                 {
//                     value: 'Option 2-2',
//                     label: 'Option 2-2',
//                 },
//             ]
//         },
//     ];

//     ////
//     function submit(): void {
//         let DateStamp: any = dateRange;
//         DateStamp = DateStamp.map((date: { toDate: () => RangeDateStamp; }) => date?.toDate());
//         console.log(DateStamp, selectOption, cascaderoption, inputNumber);
//     };

//     function clear(): void {
//         setDateRange([null, null]);
//         setSelectOption(undefined);
//         setCascaderoption(undefined);
//         setInputNumber(undefined);
//         submit();
//     }

//     return (
//         <>
//             <Form
//                 onFinish={onFinish}
//             >
//                 <Row>
//                     <Col span={4}>
//                         {/* DatePicker */}
//                         <Form.Item>
//                             <DatePicker.RangePicker
//                                 value={dateRange}
//                                 onChange={(value) => { setDateRange(value) }}
//                             />
//                         </Form.Item>
//                     </Col>
//                     <Col span={4}>
//                         {/* Select */}
//                         <Form.Item>
//                             <Select
//                                 options={optionsSelect}
//                                 value={selectOption}
//                                 onChange={(value) => { setSelectOption(value) }}
//                                 size="middle"
//                             />
//                         </Form.Item>
//                     </Col>
//                     <Col span={4}>
//                         {/* Cascader */}
//                         <Form.Item>
//                             <Cascader
//                                 options={optionCascader}
//                                 value={cascaderoption}
//                                 onChange={(value) => { setCascaderoption(value) }}
//                             />
//                         </Form.Item>
//                     </Col>
//                     <Col span={4}>
//                         {/* InputNumber */}
//                         <Form.Item>
//                             <InputNumber
//                                 value={inputNumber}
//                                 onChange={(value) => { setInputNumber(value) }}
//                             />
//                         </Form.Item>
//                     </Col>
//                     <Col span={4}>
//                         {/* Button + clear */}
//                         <Form.Item>
//                             <Button
//                                 onClick={clear}
//                             >
//                                 clear
//                             </Button>
//                             <Button
//                                 type="primary"
//                                 onClick={submit}
//                             >
//                                 submit
//                             </Button>
//                         </Form.Item>
//                     </Col>
//                 </Row>
//             </Form>
//         </>
//     )
// };

// export default L5;