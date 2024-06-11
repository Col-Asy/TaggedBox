'use client'
import React, { useState } from 'react'

export default function TagsFilter() {
    const [urgentChecked, setUrgentChecked] = useState(true);

    const [importantChecked, setImportantChecked] = useState(true);

    const [moderateChecked, setModerateChecked] = useState(true);

    const [spamChecked, setSpamChecked] = useState(true);

    return (
        <div className='flex flex-col w-full h-full pt-3 pb-2 px-5'>
            <h4>Tags</h4>

            <div className="filters text-sm pl-3">
                <div className='checkbox-wrapper pt-3 pb-1'>
                    <label className='flex items-center space-x-5'>
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={urgentChecked}
                        onChange={(e) => setUrgentChecked(e.target.checked)}
                        />
                        Urgent
                    </label>
                </div>

                <div className='pt-1 pb-1'>
                    <label className='flex items-center space-x-5'>
                        <input
                        type="checkbox"
                        className='mr-2'
                        checked={importantChecked}
                        onChange={(e) => setImportantChecked(e.target.checked)}
                        />
                        Important
                    </label>
                </div>

                <div className='pt-1 pb-1'>
                    <label className='flex items-center space-x-5'>
                        <input
                        type="checkbox"
                        className='mr-2'
                        checked={moderateChecked}
                        onChange={(e) => setModerateChecked(e.target.checked)}
                        />
                        Moderate
                    </label>
                </div>

                <div className='pt-1 pb-1'>
                    <label className='flex items-center space-x-5'>
                        <input
                        type="checkbox"
                        className='mr-2'
                        checked={spamChecked}
                        onChange={(e) => setSpamChecked(e.target.checked)}
                        />
                        Spam
                    </label>
                </div>
            </div>

        </div>
    )
}