import React, { FC, SVGProps, useEffect, useState, useRef } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  language: string;
}

export default function IconProvider({
  language,
  ...rest
}: IconProps): JSX.Element | null {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | any>();
  const [loading, setLoading] = useState(false);
  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      ImportedIconRef.current = (
        await import(`../images/svg/${language}.inline.svg`)
      ).default;
      setLoading(false);
    };
    importIcon();
  }, [language]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }
  return null;
}
