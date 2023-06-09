import { useEffect, useMemo, useRef, useState} from "react";
import classNames from "classnames";
import Image from "next/image";


export default function SectionScroller() {
  const divRef = useRef<any>(null);
  const pointersRef = useRef<any>(null);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [current, setCurrent] = useState(0)

  useMemo(() => {
    if (scrollPercent < 20) {
      // return 0;
      setCurrent(0)
    } else if (scrollPercent < 40) {
      // return 1;
      setCurrent(1)
    } else if (scrollPercent < 60) {
      // return 2;
      setCurrent(2)
    } else if (scrollPercent < 80) {
      // return 3;
      setCurrent(3)
    } else {
      // return 4;
      setCurrent(4)
    }
  }, [scrollPercent]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    console.log("scrollY", scrollY);

    const element = divRef.current;

    if (element && scrollY - element.offsetTop > 0) {
      const scrolledHeight = scrollY - element.offsetTop;
      const totalHeight = element.offsetHeight;

      setScrollPercent((scrolledHeight / totalHeight) * 100);
    }
  };

  const handleCurrent = (e, index) => {
    setCurrent(index);
    let clickedElememt = e.target;
    // console.log(clickedElememt.index());
    let clickedElememtId = clickedElememt.getAttribute("id")
  
    console.log(Array.from(pointersRef.current.children))

    let elementTop = divRef.current.offsetTop;
    let clickedElememtTop = clickedElememt.getBoundingClientRect().top;
    let totalTop = Math.round(elementTop + clickedElememtTop);

    console.log("OFFSET TOP", clickedElememt.getBoundingClientRect().top, clickedElememt.offsetTop);
    
    // window.scrollTo(0, totalTop);
  }

  return (
    <div>
      <div style={{ height: "100vh", backgroundColor: "lightblue" }}></div>
      <div ref={divRef} className={classNames("scrollParent min-h-[550vh] relative w-full h-full bg-gray-400")}>
        <div
          className={classNames("w-[90%] mx-auto h-[88vh] sticky top-[15%] flex gap-10 items-center justify-center")}
        >
            <div className={classNames("flex-1 min-h-[580px] border-2 border-solid border-black")}>
              <div className="featureImageAreaWrapper block relative min-h-[580px]">
                <div className={classNames("featureImageWrapper absolute top-0 left-0 w-full h-full",
                current === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
                )}>
                  <div className="w-full h-full">
                    <Image loader={imageLoader} fill className="object-cover h-full w-full" src={`./image1.webp`} alt="Image 1" />
                  </div>
                </div>

                <div className={classNames("featureImageWrapper absolute top-0 left-0 w-full h-full",
                current === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
                )}>
                  <div className="w-full h-full">
                    <Image loader={imageLoader} fill className="object-cover h-full w-full" src={`./image2.png`} alt="Image 1" />
                  </div>
                </div>

                <div className={classNames("featureImageWrapper absolute top-0 left-0 w-full h-full",
                current === 2 ? "opacity-100 z-10" : "opacity-0 z-0"
                )}>
                  <div className="w-full h-full">
                    <Image loader={imageLoader} fill className="object-cover h-full w-full" src={`./image3.png`} alt="Image 1" />
                  </div>
                </div>

                <div className={classNames("featureImageWrapper absolute top-0 left-0 w-full h-full",
                current === 3 ? "opacity-100 z-10" : "opacity-0 z-0"
                )}>
                  <div className="w-full h-full">
                    <Image loader={imageLoader} fill className="object-cover h-full w-full" src={`./image4.png`} alt="Image 1" />
                  </div>
                </div>

                <div className={classNames("featureImageWrapper absolute top-0 left-0 w-full h-full",
                current === 4 ? "opacity-100 z-10" : "opacity-0 z-0"
                )}>
                  <div className="w-full h-full">
                    <Image loader={imageLoader} fill className="object-cover h-full w-full" src={`./image5.png`} alt="Image 1" />
                  </div>
                </div>
              </div>
            </div>

            <ul className={classNames("scroll-wrapper flex-1 middle-cont-list",
            "flex flex-col gap-8"
            )}
            ref={pointersRef}
            >
             <li>
              <h4 className="text-3xl text-blue-500 cursor-pointer"
              id="element1"
              onClick={(e) => handleCurrent(e, 0)}
              >Self-install and activation</h4>
              <p className={classNames(
                current === 0 ? "max-h-full opacity-100": "overflow-hidden max-h-0 opacity-0",
                "text-xl",
                "transitionEffect",
                "mt-3"
              )}
              >
                Activate the OLOID M-Tag with a few taps on the admin app.
                Invite employees by reusing existing badge credentials or issue
                new ones within minutes.
              </p>
            </li>

            <li>
              <h4 className="text-3xl text-blue-500 cursor-pointer"
              id="element2"
              onClick={(e) => handleCurrent(e, 1)}
              >Easy and automated administration</h4>
              <p className={classNames(
                current === 1 ? "max-h-full opacity-100": "overflow-hidden max-h-0 opacity-0",
                "text-xl",
                "transitionEffect",
                "mt-3"
              )}>
                Onboard users or deprovision access in real-time for secure,
                up-to-date credential management which syncs automatically with
                your active directory.
              </p>
            </li>

            <li>
              <h4 className="text-3xl text-blue-500 cursor-pointer"
              id="element3"
              onClick={(e) => handleCurrent(e, 2)}
              >Intuitive remote management and reporting</h4>
              <p className={classNames(
                current === 2 ? "max-h-full opacity-100": "overflow-hidden max-h-0 opacity-0",
                "text-xl",
                "transitionEffect",
                "mt-3"
              )}>
                Set up dynamic access permissions, remotely unlock doors and
                access real-time access logs through an intuitive admin portal.
              </p>
            </li>

            <li>
              <h4 className="text-3xl text-blue-500 cursor-pointer"
              id="element4"
              onClick={(e) => handleCurrent(e, 3)}
              >Easy no-code/low-code integrations</h4>
              <p className={classNames(
                current === 3 ? "max-h-full opacity-100": "overflow-hidden max-h-0 opacity-0",
                "text-xl",
                "transitionEffect",
                "mt-3"
              )}>
                Use if-this-then-that logic, a pre-built connector library, and
                the ability to connect to any API connected system with physical
                access – without writing code.
              </p>
            </li>

            <li>
              <h4 className="text-3xl text-blue-500 cursor-pointer"
              id="element5"
              onClick={(e) => handleCurrent(e, 4)}
              >Physical Identity and Access Management</h4>
              <p className={classNames(
                current === 4 ? "max-h-full opacity-100": "overflow-hidden max-h-0 opacity-0",
                "text-xl",
                "transitionEffect",
                "mt-3"
              )}>
                Manage cyber-physical identities and credentials of employees,
                contractors and vendors, along with access approvals, security,
                privacy and compliance across multiple locations.
              </p>
            </li>
            </ul>
        </div>
      </div>
      <div style={{ height: "100vh", backgroundColor: "lightgreen" }}></div>
    </div>
  );
}


const imageLoader = ({ src}: any) => {
  return src;
};