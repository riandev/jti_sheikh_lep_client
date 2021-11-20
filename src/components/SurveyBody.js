import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "antd/dist/antd.css";

const SurveyBody = () => {
  const [searchNumber, setSearchNumber] = useState(null);
  const [dList, setDlist] = useState([]);
  const [consumer, setConsumer] = useState(null);
  const [notFound, setNotFound] = useState(false);
  console.log(consumer);
  const [q1, setQ1] = useState(null);
  const [q2, setQ2] = useState(null);
  const [q3, setQ3] = useState(null);
  const [q4, setQ4] = useState(null);
  const [q5, setQ5] = useState(null);
  const [q6, setQ6] = useState(null);
  const [q7, setQ7] = useState(null);
  const [q8, setQ8] = useState(null);
  const [q9, setQ9] = useState(null);
  const [q10, setQ10] = useState(null);
  const [q11dot1, setQ11dot1] = useState(null);
  const [q11dot2, setQ11dot2] = useState(null);
  const [q12, setQ12] = useState(null);

  const handleText = (e) => {
    setSearchNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`http://192.168.10.14:5055/dMatched/${searchNumber}`)
      .then((res) => res.json())
      .then((data) => setConsumer(data));
    setNotFound(true);
  };
  const q1value = (e) => {
    setQ1(e.target.value);
  };
  const q2value = (e) => {
    setQ2(e.target.value);
  };
  const q3value = (e) => {
    console.log(e.target.value);
    setQ3(e.target.value);
  };
  const q4value = (e) => {
    setQ4(e.target.value);
  };
  const q5value = (e) => {
    setQ5(e.target.value);
  };
  const q6value = (e) => {
    setQ6(e.target.value);
  };
  const q7value = (e) => {
    setQ7(e.target.value);
  };
  const q8value = (e) => {
    setQ8(e.target.value);
  };
  const q9value = (e) => {
    setQ9(e.target.value);
  };
  const q10value = (e) => {
    setQ10(e.target.value);
  };
  const q11dot1value = (e) => {
    setQ11dot1(e.target.value);
  };
  const q11dot2value = (e) => {
    setQ11dot2(e.target.value);
  };
  const q12value = (e) => {
    setQ12(e.target.value);
  };

  const agent = sessionStorage.getItem("agent");
  const handleSubmit = (e) => {
    const answer = {
      ans1: q1,
      ans2: q2,
      ans3: q3,
      ans4: q4,
      ans5: q5,
      ans6: q6,
      ans7: q7,
      ans8: q8,
      ans9: q9,
      ans10: q10,
      ans11dot1: q11dot1,
      ans11dot2: q11dot2,
      ans12: q12,
      agentID: agent,
      callDate: new Date().toLocaleDateString(),
      callTime: new Date().toLocaleTimeString(),
    };
    fetch(`http://192.168.10.14:5055/answers/${consumer?._id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    window.location.reload(false);
  };

  return (
    <div>
      <div style={{ display: consumer === null ? "block" : "none" }}>
        <input
          onChange={handleText}
          className="form-control w-50"
          type="text"
          name="serachNumber"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <div
        style={{
          display: consumer === null ? "none" : "block",
        }}
      >
        <h6>
          ১. আসসালামুআলাইকুম, আমি কি <b>{consumer?.r_name}</b> স্যারের সাথে কথা
          বলছি?
        </h6>
        <p className="text-secondary">
          (উত্তর যাই হোক, পরবর্তী ২নং প্রশ্নে চলে যান)
        </p>
        <Form.Group onChange={q1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q1 === "yes" || q1 === "no" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ২. আমি একটি রিসার্চ কোম্পানি থেকে ফোন করেছি । আমি কি আপনার সাথে একটু
          কথা বলতে পারি?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ আসে তবে কথা বলা চালিয়ে যাবেন, নতুনবা কথা শেষ করে
          সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
            <option value="busy">ব্যাস্ত</option>
          </Form.Control>
        </Form.Group>
      </div>
      <p
        className="font-weight-bold"
        style={{ display: q2 === "yes" ? "block" : "none" }}
      >
        * আপনার অবগতির জন্য জানানো যাচ্ছে যে কলটি রেকর্ড করা হচ্ছে এবং আপনার
        অনুমতি নেওয়া হচ্ছে যে আপনার ব্যাক্তিগত তথ্য সংরক্ষণ এবং ভবিষ্যতে
        পর্যালোচনা এর কাজে ব্যবহার করা হতে পারে।
      </p>
      <div
        style={{ display: q2 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৩. স্যার, আমি কি জানতে পারি জাতীয় পরিচয়পত্র অনুযায়ী আপনার বয়স কত?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর আসে ‘১৮ বছরের বেশি’ তবে কথা বলা চালিয়ে যাবেন, নতুবা
          ধন্যবাদ দিয়ে কথা শেষ করে সংযোগ কেটে দিন) (১৮ এর
          নিচে/১৮-২৪/২৫-৩৩/৩৪-৫০/৫০+))
        </p>
        <Form.Group onChange={q3value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="-18">১৮ এর নিচে</option>
            <option value="18-24">১৮-২৪</option>
            <option value="25-33">২৫-৩৩</option>
            <option value="34-50">৩৪-৫০</option>
            <option value="50+">৫০+</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q3 === "18-24" || q3 === "25-33" || q3 === "34-50" || q3 === "50+"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>৪. স্যার, আপনি কি ধূমপান করেন?</h6>
        <p className="text-secondary">
          (যদি উত্তর হ্যাঁ হয় তবে জিজ্ঞসা করবে ৫নং প্রশ্ন। যদি উত্তর না আসে তবে
          ধন্যবাদ দিয়ে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q4value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q4 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৫. স্যার, আমি কি জানতে পারি, আপনি কোন ব্র্যান্ড এর সিগারেট পান করেন?
        </h6>
        <Form.Group onChange={q5value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="sheikh">শেখ</option>
            <option value="derby">ডার্বি</option>
            <option value="pilot">পাইলট</option>
            <option value="hollywood">হলিউড</option>
            <option value="royols">রয়েলস</option>
            <option value="marise">মেরিস</option>
            <option value="others">অন্যান্য</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q5 === "sheikh" ||
            q5 === "derby" ||
            q5 === "pilot" ||
            q5 === "hollywood" ||
            q5 === "royols" ||
            q5 === "marise" ||
            q5 === "others"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৬. স্যার, গত এক সপ্তাহের মধ্যে আপনার সাথে কি কোন সিগারেট কোম্পানির
          প্রতিনিধি/BA এর সাথে দেখা হয়েছিল?
        </h6>
        <p className="text-secondary">
          (যদি উত্তর না আসে, তবে ধন্যবাদ দিয়ে সংযোগ কেটে দিন)
        </p>
        <Form.Group onChange={q6value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{ display: q6 === "yes" ? "block" : "none" }}
        className="mt-2"
      >
        <h6>
          ৭. প্রতিনিধি/BA কি আপনাকে সীমিত সময়ের শেখ সিগারেটের নতুন প্যাক ও স্টিক
          এর ব্যাপারে জানিয়েছে/দেখিয়েছে?
        </h6>
        <Form.Group onChange={q7value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display: q7 === "yes" ? "block" : "none",
        }}
        className="mt-2"
      >
        <h6>৮. আপনার কাছে কোনটি ভালো লেগেছে?</h6>
        <Form.Group onChange={q8value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="pack">প্যাক</option>
            <option value="stick">স্টিক</option>
            <option value="both">দুটোই</option>
            <option value="none">কোনটাই না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q8 === "pack" || q8 === "stick" || q8 === "both" || q8 === "none"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ৯. আপনার কি মনে আছে প্রতিনিধি SHEIKH নিয়ে কথা বলার সময় তার মুল বক্তব্য
          কি ছিল অথবা শেখ নিয়ে কি কি কথা বলেছিল?
        </h6>
        <Form.Group onChange={q9value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="1">দুই আংগুলে তিন শহরের পাওয়ার</option>
            <option value="2">সীমিত সময়ে তিন শহরের পাওয়ার</option>
            <option value="3">স্টিক ডিজাইনে স্বপ্নের শহরের পাওয়ার</option>
            <option value="4">দুই আঙ্গুলে জমবে প্রতিবার</option>
            <option value="5">
              লন্ডন, টোকিও, নিউইয়র্ক/ইংল্যান্ড,জাপান,আমেরিকা
            </option>
            <option value="canNotRemember">মনে নেই</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q9 === "1" ||
            q9 === "2" ||
            q9 === "3" ||
            q9 === "4" ||
            q9 === "5" ||
            q9 === "canNotRemember" ||
            q7 === "no"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১০. প্রতিনিধির সাথে কথা বলার পর আপনি দোকান থেকে কত শলাকা শেখ সিগারেট
          কিনেছিলেন?
        </h6>
        <Form.Group onChange={q10value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="noPurchase">কিনি নাই</option>
            <option value="1stick">১ শলাকা</option>
            <option value="2stick">২ শলাকা</option>
            <option value="3stick">৩ শলাকা</option>
            <option value="4stick">৪ শলাকা</option>
            <option value="5stick">5 শলাকা</option>
            <option value="2packet">২ প্যাকেট</option>
            <option value="4packet">৪ প্যাকেট</option>
            <option value="40stick">৪০ শলাকা</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q10 === "3stick" || q10 === "4stick" || q10 === "5stick"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>
          ১১.১ আপনি কি সিগারেট রাখার জন্য বিক্রেতার নিকট হতে কোন প্লাস্টিকের
          বক্স/স্যাশে পেয়েছেন?
        </h6>
        <Form.Group onChange={q11dot1value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q10 === "2packet" || q10 === "4packet" || q10 === "40stick"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>১১.২ আপনি কি বিক্রেতার নিকট হতে কোন লাইটার সহ বক্স পেয়েছেন?</h6>
        <Form.Group onChange={q11dot2value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div
        style={{
          display:
            q11dot1 === "yes" ||
            q11dot1 === "no" ||
            q11dot2 === "yes" ||
            q11dot2 === "no" ||
            q10 === "1stick" ||
            q10 === "2stick"
              ? "block"
              : "none",
        }}
        className="mt-2"
      >
        <h6>১২. আপনি কি ভবিষ্যতে SHEIKH সিগারেট পান করবেন?</h6>
        <Form.Group onChange={q12value} as={Row}>
          <Form.Control as="select" className="w-50 ml-3">
            <option>...</option>
            <option value="yes">হ্যাঁ</option>
            <option value="no">না</option>
          </Form.Control>
        </Form.Group>
      </div>
      {/* Final Question */}
      <div
        style={{
          display:
            q2 === "no" ||
            q2 === "busy" ||
            q3 === "-18" ||
            q4 === "no" ||
            q6 === "no" ||
            q12 === "yes" ||
            q12 === "no" ||
            q10 === "noPurchase"
              ? "block"
              : "none",
        }}
        className="mt-3"
      >
        <h5>ধন্যবাদ স্যার, আপনার মূল্যবান সময় দেয়ার জন্য।</h5>
        <br />
        <button onClick={handleSubmit} className="btn btn-danger">
          Submit Survey
        </button>
      </div>
    </div>
  );
};

export default SurveyBody;
