interface BradcamProps {
    title: string;
    bgClass?: string;
}

const Bradcam: React.FC<BradcamProps> = ({ title, bgClass = 'bradcam_bg' }) => {
    return (
        <div className="bradcam_area">
            <div className={`bradcam_inner ${bgClass} d-flex align-items-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bradcam_text text-center">
                                <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bradcam;
