import React, { useState, useEffect } from 'react'
import {
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CButton,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CInputGroup,
  CSpinner,
} from '@coreui/react'
import { getPageData, updataPageData, uploadImages } from 'src/services/pages_services'
import { useLocation } from 'react-router-dom'

export default function Inicio() {
  // const location = useLocation()
  const pageName = 'inicio'

  useEffect(() => {
    gettingPageData()
  }, [pageName])

  const [pageData, setPageData] = useState(null)
  const [pageImages, setPageImages] = useState(null)
  const [loading, setLoading] = useState(true)

  const gettingPageData = async () => {
    await getPageData(pageName).then((res) => {
      setPageData(res)
      setLoading(false)

      console.log('pageData', res)
    })
  }

  const postpageData = async () => {
    setLoading(true)
    if (pageImages) {
      await uploadImages(pageImages).then((res) => {
        if (res) {
          const imageData = res.data.data
          Object.values(imageData).map((key) => {
            const { section, name, value } = key
            const pageDataC = { ...pageData }
            pageDataC[section][name] = value
            setPageData(pageDataC)
          })
        }
      })
    }
    await updataPageData(pageName, pageData)
    setLoading(false)
  }

  const onChangeValue = (e, section, name) => {
    e.preventDefault()
    setPageData({ ...pageData, [`${section}`]: { ...pageData[section], [name]: e.target.value } })
  }

  const onChangeImageValue = (e, section, name) => {
    e.preventDefault()
    setPageImages({
      ...pageImages,
      [`${section}_${name}`]: e.target.files[0],
    })
  }

  return (
    <div className="pb-5">
      {pageData && !loading ? (
        <>
          <Section1
            pageData={pageData}
            section="section1"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section2
            pageData={pageData}
            section="section2"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />

          <Section3
            pageData={pageData}
            section="section3"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section4
            pageData={pageData}
            section="section4"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section5
            pageData={pageData}
            section="section5"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section6
            pageData={pageData}
            section="section6"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section7
            pageData={pageData}
            section="section7"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section8
            pageData={pageData}
            section="section8"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section9
            pageData={pageData}
            section="section9"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section10
            pageData={pageData}
            section="section10"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <Section11
            pageData={pageData}
            section="section11"
            onChangeImageValue={onChangeImageValue}
            onChangeValue={onChangeValue}
          />
          <div className="d-grid gap-2 m-3">
            <CButton onClick={() => postpageData()} color="primary">
              Submit
            </CButton>
          </div>
        </>
      ) : (
        <CSpinner color="success" />
      )}
    </div>
  )
}
const Section1 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section1 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section1</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
            </CInputGroup>
            <CInputGroup>
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section1 */}
    </div>
  )
}

const Section2 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section2 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section2</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                floatingLabel="title1_en"
                value={data.title1_en}
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
            </CInputGroup>
            <CInputGroup>
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'video1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  video1
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section2 */}
    </div>
  )
}

const Section3 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section3 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section3</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_zh')}
                id="floatingTextarea"
                value={data.text4_zh}
                floatingLabel="text4_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_zh')}
                id="floatingTextarea"
                value={data.text5_zh}
                floatingLabel="text5_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_zh')}
                id="floatingTextarea"
                value={data.text6_zh}
                floatingLabel="text6_zh"
              />
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section3 */}
    </div>
  )
}
const Section4 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section4 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section4</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_zh')}
                id="floatingTextarea"
                value={data.title2_zh}
                floatingLabel="title2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section4 */}
    </div>
  )
}
const Section5 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section5 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section5</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_zh')}
                id="floatingTextarea"
                value={data.title2_zh}
                floatingLabel="title2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section5 */}
    </div>
  )
}
const Section6 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section6 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section6</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_zh')}
                id="floatingTextarea"
                value={data.title2_zh}
                floatingLabel="title2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_zh')}
                id="floatingTextarea"
                value={data.text4_zh}
                floatingLabel="text4_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_zh')}
                id="floatingTextarea"
                value={data.text5_zh}
                floatingLabel="text5_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_zh')}
                id="floatingTextarea"
                value={data.text6_zh}
                floatingLabel="text6_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_zh')}
                id="floatingTextarea"
                value={data.text7_zh}
                floatingLabel="text7_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_en')}
                id="floatingTextarea"
                value={data.text8_en}
                floatingLabel="text8_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_zh')}
                id="floatingTextarea"
                value={data.text8_zh}
                floatingLabel="text8_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_en')}
                id="floatingTextarea"
                value={data.text9_en}
                floatingLabel="text9_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_zh')}
                id="floatingTextarea"
                value={data.text9_zh}
                floatingLabel="text9_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image5')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image5
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image6')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image6
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image7')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image7
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image8')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image8
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1"></CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section6 */}
    </div>
  )
}
const Section7 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section7 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section7</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_zh')}
                id="floatingTextarea"
                value={data.text4_zh}
                floatingLabel="text4_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_zh')}
                id="floatingTextarea"
                value={data.text5_zh}
                floatingLabel="text5_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_zh')}
                id="floatingTextarea"
                value={data.text6_zh}
                floatingLabel="text6_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image5')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image5
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image6')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image6
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section7 */}
    </div>
  )
}
const Section8 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section8 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section8</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_zh')}
                id="floatingTextarea"
                value={data.title2_zh}
                floatingLabel="title2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_zh')}
                id="floatingTextarea"
                value={data.text4_zh}
                floatingLabel="text4_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_zh')}
                id="floatingTextarea"
                value={data.text5_zh}
                floatingLabel="text5_zh"
              />
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>

            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section8 */}
    </div>
  )
}
const Section9 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section9 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section9</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_en')}
                id="floatingTextarea"
                value={data.text2_en}
                floatingLabel="text2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text2_zh')}
                id="floatingTextarea"
                value={data.text2_zh}
                floatingLabel="text2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_en')}
                id="floatingTextarea"
                value={data.text3_en}
                floatingLabel="text3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text3_zh')}
                id="floatingTextarea"
                value={data.text3_zh}
                floatingLabel="text3_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_en')}
                id="floatingTextarea"
                value={data.text4_en}
                floatingLabel="text4_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text4_zh')}
                id="floatingTextarea"
                value={data.text4_zh}
                floatingLabel="text4_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_en')}
                id="floatingTextarea"
                value={data.text5_en}
                floatingLabel="text5_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text5_zh')}
                id="floatingTextarea"
                value={data.text5_zh}
                floatingLabel="text5_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_en')}
                id="floatingTextarea"
                value={data.text6_en}
                floatingLabel="text6_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text6_zh')}
                id="floatingTextarea"
                value={data.text6_zh}
                floatingLabel="text6_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_en')}
                id="floatingTextarea"
                value={data.text7_en}
                floatingLabel="text7_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text7_zh')}
                id="floatingTextarea"
                value={data.text7_zh}
                floatingLabel="text7_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_en')}
                id="floatingTextarea"
                value={data.text8_en}
                floatingLabel="text8_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text8_zh')}
                id="floatingTextarea"
                value={data.text8_zh}
                floatingLabel="text8_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_en')}
                id="floatingTextarea"
                value={data.text9_en}
                floatingLabel="text9_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text9_zh')}
                id="floatingTextarea"
                value={data.text9_zh}
                floatingLabel="text9_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_en')}
                id="floatingTextarea"
                value={data.text10_en}
                floatingLabel="text10_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text10_zh')}
                id="floatingTextarea"
                value={data.text10_zh}
                floatingLabel="text10_zh"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section9 */}
    </div>
  )
}
const Section10 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section10 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section10</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image5')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image5
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section10 */}
    </div>
  )
}

const Section11 = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Section11 */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Section11</CAccordionHeader>
          <CAccordionBody>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_en')}
                id="floatingTextarea"
                value={data.title1_en}
                floatingLabel="title1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title1_zh')}
                id="floatingTextarea"
                value={data.title1_zh}
                floatingLabel="title1_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_en')}
                id="floatingTextarea"
                value={data.title2_en}
                floatingLabel="title2_en"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title2_zh')}
                id="floatingTextarea"
                value={data.title2_zh}
                floatingLabel="title2_zh"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_en')}
                id="floatingTextarea"
                value={data.text1_en}
                floatingLabel="text1_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'text1_zh')}
                id="floatingTextarea"
                value={data.text1_zh}
                floatingLabel="text1_zh"
              />
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image1')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image1
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image2')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image2
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image3')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image3
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image4')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image4
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image5')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image5
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image6')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image6
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1">
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image7')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image7
                </CFormLabel>
              </CFormFloating>
              <CFormFloating className="mb-1">
                <CFormInput
                  onChange={(e) => {
                    onChangeImageValue(e, section, 'image8')
                  }}
                  type="file"
                  id="floatingInput"
                  size="sm"
                />
                <CFormLabel style={{ marginTop: -6 }} htmlFor="floatingInput">
                  image8
                </CFormLabel>
              </CFormFloating>
            </CInputGroup>
            <CInputGroup className="mb-1"></CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section11 */}
    </div>
  )
}
