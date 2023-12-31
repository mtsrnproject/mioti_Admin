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

export default function Data_strategy() {
  // const location = useLocation()
  const pageName = 'data_strategy'

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
          <Side_Menu
            pageData={pageData}
            section="side_menu"
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
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section2 */}
    </div>
  )
}
const Side_Menu = ({ pageData, section, onChangeValue, onChangeImageValue }) => {
  const data = pageData[section]
  return (
    <div>
      {/* Side_Menu */}
      <CAccordion activeItemKey={2}>
        <CAccordionItem itemKey={1}>
          <CAccordionHeader>Side_Menu</CAccordionHeader>
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
                onChange={(e) => onChangeValue(e, section, 'title3_en')}
                id="floatingTextarea"
                value={data.title3_en}
                floatingLabel="title3_en"
              />
              <CFormTextarea
                onChange={(e) => onChangeValue(e, section, 'title3_zh')}
                id="floatingTextarea"
                value={data.title3_zh}
                floatingLabel="title3_zh"
              />
            </CInputGroup>
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Side_Menu */}
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
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
      {/* Section9 */}
    </div>
  )
}
