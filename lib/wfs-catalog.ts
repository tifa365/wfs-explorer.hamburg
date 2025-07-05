// Auto-generated WFS catalog for Hamburg
// Generated from hamburg_main_wfs.json

export interface WfsService {
  id: string;
  title: string;
  description: string;
  url: string;
  organization: string;
  keywords: string[];
}

export const wfsCatalog: WfsService[] = [
  {
    id: "wasserschutzgebiete-hamburg23",
    title: "Wasserschutzgebiete Hamburg",
    description: "Daten zu den Hamburger Wasserschutzgebieten (WSG). Dargestellt werden die Schutzzonen II und III zur Veröffentlichung im Internet. Neben den nach §51 WHG (Wasserhaushaltsgesetz) und §27 HWaG (Hamburgi",
    url: "https://geodienste.hamburg.de/HH_WFS_Wasserschutzgebiete?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:wasserschutzgebiete",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "bauschutzbereich-12-luftvg-hamburg1347",
    title: "Bauschutzbereich § 12 LuftVG Hamburg",
    description: "Der Bauschutzbereich gem. § 12 LuftVG stellt den Bereich dar, in dessen Bereich in der Umgebung eines Flughafens für die Errichtung von permanentem (Bauwerken, Masten etc.) bzw. temporären (Kräne) ein",
    url: "https://geodienste.hamburg.de/HH_WFS_Bauschutzbereich_12_LuftVG?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:landebahnachsen",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: ["hafen"]
  },
  {
    id: "trockenfallende-gewaesser-hamburg10",
    title: "Trockenfallende Gewässer Hamburg",
    description: "Der Dienst \"Trockenfallende Gewässer Hamburg\" enthält als WMS-Darstellungsdienst und WFS-Downloaddienst die in der Studie \"Untersuchung der Niedrigwassersituation in Hamburg unter besonderer Ber...",
    url: "https://geodienste.hamburg.de/HH_WFS_Trockenfallende_Gewaesser?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:trockenfallende_gewaesser",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "unterbringung-gefluechteter-schutzsuchender-wohnungsloser-in-hamburg2",
    title: "Unterbringung Geflüchteter, Schutzsuchender, Wohnungsloser in Hamburg",
    description: "Dargestellt werden die Einrichtungen der öffentlichen Unterbringung für die Unterbringung Geflüchteter, Schutzsuchender und Wohnungsloser Menschen in Hamburg. Im einzelnen umfasst dies die Zentrale Er",
    url: "https://geodienste.hamburg.de/wfs_unterbringung_gefluechtete_schutzlose_wohnungslose?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Stabsstelle Flüchtlinge und übergreifende Aufgaben (SFA)",
    keywords: []
  },
  {
    id: "krankenhaeuser-hamburg14",
    title: "Krankenhäuser Hamburg",
    description: "Datensatz der Krankenhäuser, die sich im Krankenhausplan der Freien und Hansestadt Hamburg befinden mit Angaben über die Planbettenzahl, die Anzahl der teilstationären Behandlungsplätze, die Teilnahme",
    url: "https://geodienste.hamburg.de/HH_WFS_Krankenhaeuser?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:gesundheit_krankenhaeuser",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["kranken"]
  },
  {
    id: "hwrm-karten-1-zyklus-hamburg18",
    title: "HWRM-Karten 1.Zyklus Hamburg",
    description: "Fachliche Beschreibung: Die EG-Richtlinie zum Hochwasserrisikomanagement hat die Reduzierung der Risiken durch Hochwasser als Ziel. Der erste von drei vorgeschriebenen Schritten zu diesem Ziel beste",
    url: "https://geodienste.hamburg.de/HH_WFS_Risikogebiete_HW?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "hwrm-karten-2-zyklus-hamburg19",
    title: "HWRM-Karten 2.Zyklus Hamburg",
    description: "Fachliche Beschreibung: Die hier beschriebenen Daten bilden die Inhalte der Hochwassergefahren- und Hochwasserrisikokarten gemäß EG-Hochwasserrisikomanagementrichtlinie (2007/60/EG, HWRM-RL) für den 2",
    url: "https://geodienste.hamburg.de/HH_WFS_HWRM_2_Zyklus?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "badegewaesser-daten-hamburg15",
    title: "Badegewässer (Daten) Hamburg",
    description: "Fachliche Beschreibung: Darstellung der Badegewässer und ihrer Überwachungsmessstellen im Internet. Organisatorische Rahmenbedingungen: Die EG-Badegewässerrichtlinie (2006/7/EG vom 15. Februar 2006)",
    url: "https://geodienste.hamburg.de/HH_WFS_Badegewaesser?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "verkehrsstaerken-bedarfszaehlstellen-hamburg11",
    title: "Verkehrsstärken Bedarfszählstellen Hamburg",
    description: "Dieser Dienst wird in Kürze deaktiviert. Bitte nutzen Sie ab sofort ausschließlich den Dienst „Verkehrsstärken Hamburg“.",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehrsstaerken_Bedarfszaehlstellen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "hw-gefaehrdeter-bereich-tidegebiet-elbe-hamburg13",
    title: "HW-gefährdeter Bereich Tidegebiet Elbe Hamburg",
    description: "Hochwasser gefährdeter Bereich Tidegebiet Elbe Hamburg Fachliche Beschreibung: „Der durch Tidehochwasser, insbesondere Sturmfluten, gefährdete Bereich im Tidegebiet der Elbe besteht aus den Landflä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hochwasser_gefaehrdeter_Bereich_Tidegebiet_Elbe?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "ueberschwemmungsgebiete-hamburg16",
    title: "Überschwemmungsgebiete Hamburg",
    description: "Fachliche Beschreibung: Darstellung der festgesetzten Überschwemmungsgebiete (ÜSG) der Freien und Hansestadt Hamburg. Rechtlicher Hintergrund: Das Wasserhaushaltsgesetz mit seiner Verpflichtung zur F",
    url: "https://geodienste.hamburg.de/HH_WFS_UESG?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "verkehrsstaerken-hamburg13",
    title: "Verkehrsstärken Hamburg",
    description: "Auf dem Gebiet Hamburgs werden in regelmäßigen Abständen Verkehrszählungen durchgeführt. Die Ergebnisse aus diesen Zählungen dienen in erster Linie der Verkehrsplanung sowie der Ermittlung der Verkehr",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehrsstaerken?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "versickerungspotentialkarte-hamburg28",
    title: "Versickerungspotentialkarte Hamburg",
    description: "Die Versickerungspotentialkarte (VPK) ist eine wasserwirtschaftliche Planungskarte zur Beurteilung der Durchführbarkeit von Regenwasserbewirtschaftungsmaßnahmen, speziell Versickerungsanlagen. Sie die",
    url: "https://geodienste.hamburg.de/HH_WFS_Versickerung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "referenzwerte-naturnaher-wasserhaushalt-hamburg3",
    title: "Referenzwerte naturnaher Wasserhaushalt Hamburg",
    description: "Die Karte „Referenzwerte Naturnaher Wasserhaushalt“ ist eine wasserwirtschaftliche Planungskarte aus der die Anteile der Grundwasserneubildung, der Verdunstung und des Abflusses am Regenwasser für den",
    url: "https://geodienste.hamburg.de/wfs_refnatnahwasshaus?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["bildung", "wasser"]
  },
  {
    id: "bezirksradrouten-hamburg-bergedorf",
    title: "Bezirksradrouten Hamburg Bergedorf",
    description: "Der Datensatz enthält die Bezirksradrouten für den Alltagsradverkehr im Hamburger Bezirk Bergedorf. Die Bezirksradrouten verbinden wichtige Ziele innerhalb der Bezirke und Stadtteile und sind eine Erg",
    url: "https://qs-geodienste.hamburg.de/wfs_bezirksradrouten_bergedorf?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "grundwasserflurabstand-hamburg2",
    title: "GrundwasserFlurabstand Hamburg",
    description: "Vektordatensatz mit den Grundwasserflurabstandskarten für Hamburg. Es werden 2 unterschiedliche Layer gezeigt: 1. Grundwasserflurabstand Min Minimaler Flurabstand zur Grundwasseroberfläche in Me",
    url: "https://geodienste.hamburg.de/wfs_grundwasserflurabstand?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "einbau-ersatzbaustoffe-hamburg9",
    title: "Einbau Ersatzbaustoffe Hamburg",
    description: "Anforderungen an die stoffliche Verwertung von mineralischen Abfällen: Karte zur Beurteilung der Einbaufähigkeit von Ersatzbaustoffen unter Berücksichtigung der Grundwasserflurabstände (Überschwemmung",
    url: "https://geodienste.hamburg.de/wfs_einbau_ersatzbaustoffe?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "naturraum-geest-und-marsch-hamburg2",
    title: "Naturraum Geest und Marsch Hamburg",
    description: "Die Zuordnung des Hamburger Stadtgebietes zu den Naturräumen Geest und Marsch wird dargestellt. Die Karte ist auch als Hilfskarte für den Kontext - Einbau Ersatzbaustoffe - zu verstehen. Hier gibt es",
    url: "https://geodienste.hamburg.de/wfs_naturraeume_geest_und_marsch?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "gewaesserbauwerke-hamburg12",
    title: "Gewässerbauwerke Hamburg",
    description: "Bauwerke in und an Gewässern der FHH",
    url: "https://geodienste.hamburg.de/HH_WFS_Gewaesserbauwerke?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grundwassergleichenplaene-hamburg2",
    title: "GrundwasserGleichenpläne Hamburg",
    description: "Vektordatensatz mit den Grundwassergleichenplänen für Hamburg. Es werden 3 verschiedene Isolinienpläne dargestellt: 1. Grundwassergleichen Min Grundwassergleichen in Meter NHN des hydrologischen",
    url: "https://geodienste.hamburg.de/wfs_grundwassergleichen?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "zentraler-adressservice-hamburg2",
    title: "Zentraler AdressService Hamburg",
    description: "Der Zentrale AdressService Hamburg ist ein BasisService der Urban Data Platform (UDP) Hamburg mit den amtlichen Adressen der Stadt. Der Landesbetrieb Geoinformation und Vermessung (LGV) hat zusammen",
    url: "https://geodienste.hamburg.de/HH_WFS_GAGES?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "bodenrichtwerte-hamburg22",
    title: "Bodenrichtwerte Hamburg",
    description: "Bodenrichtwerte, bis 2008 lagetypisch, ab 2010 zonal, nach gezahlten Kaufpreisen flächendeckend für Hamburg vom Gutachterausschuss für Grundstückswerte ermittelt, seit 1973 in Form von Karten und in d",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenrichtwerte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "vollzogene-rueckfuehrungen-in-hamburg13",
    title: "Vollzogene Rückführungen in Hamburg",
    description: "Achtung: Dieser Datensatz wird gelöscht. Möglicherweise stehen nicht mehr alle Funktionen vollumfänglich zur Verfügung. Bisherige Beschreibung: Die zuständige Behörde hat den gesetzlichen Auftrag, be",
    url: "https://geodienste.hamburg.de/HH_WFS_Micado_vollzogene_Rueckfuehrungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mic_abschiebungen_ins_herkunftsland",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "anzahl-der-ueberresidenten-in-hamburg13",
    title: "Anzahl der Überresidenten in Hamburg",
    description: "Achtung: Dieser Datensatz wird gelöscht. Möglicherweise stehen nicht mehr alle Funktionen vollumfänglich zur Verfügung. Bisherige Beschreibung: Gemäß § 47 Abs. 1 Satz1 AsylG sind Asylsuchende verpfli",
    url: "https://geodienste.hamburg.de/HH_WFS_Micado_Anzahl_Ueberresidenten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mic_personen_aus_sicheren_herkunftslaendern",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "alkis-verwaltungsgrenzen-hamburg29",
    title: "ALKIS Verwaltungsgrenzen Hamburg",
    description: "Hinweis: Seit dem 9. Dezember erfasst der LGV die AFIS/ALKIS/ATKIS Daten bundeseinheitlich in der AdV-Referenzversion 7.1 im AFIS-ALKIS-ATKIS-Anwendungsschemas (AAA-AS) Version 7.1.2. Bei Fragen zu i",
    url: "https://geodienste.hamburg.de/HH_WFS_Verwaltungsgrenzen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:baubloecke",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "bewohnerparkgebiete-hamburg14",
    title: "Bewohnerparkgebiete Hamburg",
    description: "Dieser Dienst zeigt die Bewohnerparkgebiete (BWP) Hamburgs. BWP sind in Zonen unterteilte Bereiche weitgehend einheitlicher Parkraumbewirtschaftung, in denen Bewohner:innen bevorrechtigt werden. Dazu",
    url: "https://geodienste.hamburg.de/HH_WFS_bewohnerparkgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Verkehr (LBV)",
    keywords: ["park"]
  },
  {
    id: "parkscheinautomaten-hamburg12",
    title: "Parkscheinautomaten Hamburg",
    description: "Dieser Dienst stellt die in der Freien und Hansestadt Hamburg aufgestellten und vom Landesbetrieb Verkehr betreuten Parkautomaten bzw. deren Standorte dar. In den Sachdaten sind neben Informationen zu",
    url: "https://geodienste.hamburg.de/HH_WFS_Parkscheinautomaten?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Verkehr (LBV)",
    keywords: ["park", "verkehr"]
  },
  {
    id: "oeffentlicher-parkraum-hamburg7",
    title: "Öffentlicher Parkraum Hamburg",
    description: "Dieser Dienst zeigt den öffentlichen Parkraum Hamburgs in ausgewählten Bereichen. Nicht enthalten sind private Stellplätze oder Parkplätze (z. B. von Supermärkten, Unternehmen, P+R-/B+R-Anlagen, sonst",
    url: "https://geodienste.hamburg.de/HH_WFS_Parkraum?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Verkehr (LBV)",
    keywords: ["park"]
  },
  {
    id: "bodenrichtwerte-uebersichtskarte-ueber-normierte-bodenrichtwerte-hamburg17",
    title: "Bodenrichtwerte Übersichtskarte über normierte Bodenrichtwerte Hamburg",
    description: "Die Übersichtskarte zeigt normierte Bodenrichtwerte für die Nutzungen Einfamilienhäuser, Mehrfamilienhäuser, Bürohäuser, Läden und Produktion / Logistik. Die Bodenrichtwerte wurden auf eine Grundstück",
    url: "https://geodienste.hamburg.de/HH_WFS_UEKnormierteBodenrichtwerte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:lgv_brw_uek_baubloecke",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "seniorenvertretung-eimsbuettel-hamburg3",
    title: "Seniorenvertretung Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Angebote der Seniorenvertretung. Dazu gehören der Bezirks-Seniorenbeirat und die Seniorendelegiertenversammlung.",
    url: "https://geodienste.hamburg.de/WFS_Seniorenvertretung_Eimsbuettel?Service=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "rechtsberatung-und-zielgruppenorientierte-beratung-eimsbuettel-hamburg3",
    title: "Rechtsberatung und zielgruppenorientierte Beratung Eimsbüttel Hamburg",
    description: "Der Datensatz enthält Einrichtungen der Rechtsberatung und Beratungsangebote für spezielle Zielgruppen. Dazu gehören zum Beispiel Angebote für blinde, sehbehinderte oder schwerhörige Menschen.",
    url: "https://geodienste.hamburg.de/wfs_rechtsberatung_zielgruppenor_beratung_eimsbuettel?service=wfs&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "digital-unterwegs-im-alter-eimsbuettel-hamburg3",
    title: "Digital unterwegs im Alter Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Angebote für Senioren zum Thema Medien und Medienkompetenz.",
    url: "https://geodienste.hamburg.de/WFS_Digital_unterwegs_im_Alter_Eimsbuettel?Service=WFS&Request=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "unterstuetzung-zu-hause-eimsbuettel-hamburg18",
    title: "Unterstützung zu Hause Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Einrichtungen und Angebote zum Thema Unterstützung zu Hause. Dazu gehören ambulante Pflegedienste, Essen auf Rädern, Hausnotrufsysteme, Besuchs- und Begleitdienste, Fahrdienst",
    url: "https://geodienste.hamburg.de/HH_WFS_Unterstuetzung_zu_Hause_Eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "demenz-eimsbuettel-hamburg16",
    title: "Demenz Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Einrichtungen zum Thema Demenz. Dazu gehören Demenzberatungsangebote, Wohn-Pflege-Angebote und spezielle Angebote in Krankenhäusern.",
    url: "https://geodienste.hamburg.de/HH_WFS_Demenz_Eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["kranken"]
  },
  {
    id: "hospizarbeit-und-trauerbegleitung-eimsbuettel-hamburg5",
    title: "Hospizarbeit und Trauerbegleitung Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Einrichtungen zum Thema Hospizarbeit, Trauerbegleitung und Palliativpflege.",
    url: "https://geodienste.hamburg.de/HH_WFS_Hospize_Eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "sport-und-bewegung-eimsbuettel-hamburg17",
    title: "Sport und Bewegung Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet ausgewählte Sportvereine (nicht alle Sportstätten der Vereine) und Sportangebote im Bezirk Eimsbüttel.",
    url: "https://geodienste.hamburg.de/HH_WFS_Sport_Bewegung_Eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["port"]
  },
  {
    id: "wohnen-und-pflege-eimsbuettel-hamburg15",
    title: "Wohnen und Pflege Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Einrichtungen zum Thema Wohnen und Pflege. Dazu gehören alternative Wohnformen, Einrichtungen zur Betreuung Demenzkranker, stationäre Pflegeangebote, teilstationäre Pflegeange",
    url: "https://geodienste.hamburg.de/HH_WFS_Wohnen_Pflege_Eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["wohnen"]
  },
  {
    id: "hamburger-luftmessnetz-halm29",
    title: "Hamburger Luftmessnetz (HaLm)",
    description: "Das Hamburger Luftmessnetz (HaLm) * betreibt 15 Messstationen zur Überwachung der Luftqualität * unterscheidet zwischen Hintergrund-, Ozon- und Verkehrs-Messstationen * misst kontinuierlich gemäß EU-",
    url: "https://geodienste.hamburg.de/HH_WFS_Luftmessnetz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["verkehr"]
  },
  {
    id: "staedtebauliche-erhaltungsverordnungen-hamburg15",
    title: "Städtebauliche Erhaltungsverordnungen Hamburg",
    description: "Städtebauliche Erhaltungsverordnungen nach §172 Abs.1 Satz 1 Nr. 1 BauGB. Die Daten werden nach dem Standard XPlanung erstellt und bei Bedarf fortgeführt. Soziale Erhaltungsverordnungen nach §172 Abs",
    url: "https://geodienste.hamburg.de/HH_WFS_Erhaltungsverordnung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["sozial"]
  },
  {
    id: "standorte-von-windkraftanlagen-in-hamburg26",
    title: "Standorte von Windkraftanlagen in Hamburg",
    description: "Standorte von Windkraftanlagen in Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Windkraftanlagen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:wka",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "wfs-taxenstaende-hamburg10",
    title: "WFS Taxenstände Hamburg",
    description: "Dieser WFS (WebFeatureService) enthält alle Taxenstände innerhalb Hamburgs. Hierbei ist es unerheblich ob sich diese auf öffentlichem oder privatem Grund befinden. Der allgemeine Aktualisierungsrhy",
    url: "https://geodienste.hamburg.de/HH_WFS_Taxenstaende?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: []
  },
  {
    id: "ausgleichsflaechen-gemaess-bundesnaturschutzgesetz-kompensationsverzeichnis-internet14",
    title: "Ausgleichsflächen gemäß Bundesnaturschutzgesetz (Kompensationsverzeichnis) - Internet",
    description: "Dieser Datensatz enthält aus Datenschutzgründen nur eine Teilmenge der Ausgleichsflächen des Hamburger Kompensationsverzeichnisses. Diese Daten enthalten alle Ausgleichsflächen aus großen Eingriffsvor",
    url: "https://geodienste.hamburg.de/HH_WFS_Ausgleichsflaechen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["grün"]
  },
  {
    id: "regionalstatistische-daten-zur-metropolregion-hamburg3",
    title: "Regionalstatistische Daten zur Metropolregion Hamburg",
    description: "Daten aus öffentlich zugänglichen Statistiken (Regionaldatenbank des Statistischen Bundesamtes), die für das Datenportal der Metropolregion Hamburg zusammengestellt und gruppiert wurden. Die Daten sta",
    url: "https://geodienste.hamburg.de/wfs_regionalstatistische_daten_mrh?Service=WFS&REQUEST=GetCapabilities",
    organization: "Geschäftsstelle der Metropolregion Hamburg",
    keywords: ["port"]
  },
  {
    id: "business-improvement-districts-hamburg2",
    title: "Business Improvement Districts Hamburg",
    description: "Business Improvement Districts (BID), die in Hamburg Innovationsbereiche genannt werden, sind klar begrenzte Geschäftsgebiete (Business Districts), in denen auf Veranlassung der Betroffenen (z. B. Eig",
    url: "https://geodienste.hamburg.de/wfs_bid_hamburg?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "fahrgastunterstaende-eimsbuettel-hamburg1",
    title: "Fahrgastunterstände Eimsbüttel Hamburg",
    description: "Der Datensatz enthält eine Übersicht über alle Fahrgastunterstände an Bushaltestellen im Bezirk Eimsbüttel. Zusätzliche Informationen sind den Attributen zu entnehmen.",
    url: "https://geodienste.hamburg.de/wfs_fahrgastunterstaende_eimsbuettel?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "grundwasserflurabstand-min15",
    title: "Grundwasserflurabstand Min",
    description: "Achtung: Dieser Datensatz ist veraltet und wird seit #04.2025# nicht mehr aktualisiert. Gemäß Hamburger Transparenzgesetz wird er für 10 Jahre vorgehalten und im Anschluss gelöscht. Die Daten sind",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:u12_f_gw_flurabstand_min",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "grundwasserflurabstand-max16",
    title: "Grundwasserflurabstand Max",
    description: "Achtung: Dieser Datensatz ist veraltet und wird seit #04.2025# nicht mehr aktualisiert. Gemäß Hamburger Transparenzgesetz wird er für 10 Jahre vorgehalten und im Anschluss gelöscht. Die Daten sind",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:u12_f_gw_flurabstand_max",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "jobcenter-team-arbeit-hamburg-jugendberufsagenturen-hamburg16",
    title: "Jobcenter team.arbeit.hamburg / Jugendberufsagenturen Hamburg",
    description: "Jobcenter team.arbeit.hamburg ist eine gemeinsame Einrichtung der Agentur für Arbeit Hamburg und der Freien und Hansestadt Hamburg. Sie unterstützt Menschen bei der Integration in Ausbildung und Arbei",
    url: "https://geodienste.hamburg.de/HH_WFS_Jobcenter_Jugendberufsagentur?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:jobcenter",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["bildung"]
  },
  {
    id: "kita-einrichtungen-hamburg29",
    title: "Kita Einrichtungen Hamburg",
    description: "Es werden täglich zwei Dateien generiert: 1. Kita_Einrichtung.csv 2. Kita_Einrichtung_Leistung.csv Die Datei Kita_Einrichtung.csv stellt für jede Kindertagesstätte genau eine Zeile mit Informationen",
    url: "https://geodienste.hamburg.de/HH_WFS_KitaEinrichtung?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:KitaEinrichtungen",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["kinder"]
  },
  {
    id: "wettvermittlungsstellen-hamburg",
    title: "Wettvermittlungsstellen Hamburg",
    description: "Der Datensatz stellt die auf dem Gebiet der Freien und Hansestadt Hamburg durch die Glücksspielaufsicht Hamburg geprüften und erlaubten terrestrischen Sportwettvermittlungsstellen dar. Die Daten bezei",
    url: "https://geodienste.hamburg.de/wfs_wettvermittlungsstellen?Service=WFS&Version=2.0.0&Request=GetCapabilities",
    organization: "Behörde für Inneres und Sport",
    keywords: ["port"]
  },
  {
    id: "gesamtverteilungsentscheidungen-asylsuchender-in-hamburg12",
    title: "Gesamtverteilungsentscheidungen Asylsuchender in Hamburg",
    description: "Achtung: Dieser Datensatz wird gelöscht. Möglicherweise stehen nicht mehr alle Funktionen vollumfänglich zur Verfügung. Bisherige Beschreibung: Monatlicher Zugang von Flüchtlingen in Hamburg mit Ver",
    url: "https://geodienste.hamburg.de/HH_WFS_micado_gesamtverteilungsentscheidungen_asylsuchender?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mic_gesamtzugaenge",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "nicht-vollzogene-rueckfuehrungen-in-hamburg11",
    title: "Nicht vollzogene Rückführungen in Hamburg",
    description: "Achtung: Dieser Datensatz wird gelöscht. Möglicherweise stehen nicht mehr alle Funktionen vollumfänglich zur Verfügung Bisherige Beschreibung: Die zuständige Behörde hat den gesetzlichen Auftrag, be",
    url: "https://geodienste.hamburg.de/HH_WFS_Micado_nicht_vollzogene_Rueckfuehrungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mic_nicht_vollzogene_rueckfuehrungen",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "hydrogeologische-profiltypen-der-ungesaettigten-zone13",
    title: "Hydrogeologische Profiltypen der ungesättigten Zone",
    description: "Die hydrogeologische Profiltypenkarte der ungesättigten Zone ist in digitaler Form vorhanden. Untersucht wurde die ungesättigte Zone (Sickerwasserpassage) bis zum Hauptgrundwasserleiter. Ein Schema de",
    url: "https://geodienste.hamburg.de/HH_WFS_Hydrogeologie?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "temperatur-in-100-m-unter-gelaende15",
    title: "Temperatur in 100 m unter Gelände",
    description: "Karte zur Temperaturverteilung in einer Tiefe von 100 m unter Gelände. Datengrundlage sind gemessene Temperaturprofile an ca. 130 tiefen Grundwassermessstellen. Diese Temperaturprofile dienen als Gr",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:temperatur_in_100m_unter_gelaende",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "waermeleitfaehigkeit-bis-40-m15",
    title: "Wärmeleitfähigkeit bis 40 m",
    description: "Karte zur mittleren Wärmeleitfähigkeit bis 40 m (in W/mK) Alle im Geologischen Landesamt vorhandenen Bohrungen (Stand: Jan. 2019), die eine Tiefe von mindestens 40 m aufweisen sind mit den in Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mittlere_waermeleitfaehigkeit_40m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "waermeleitfaehigkeit-bis-100-m15",
    title: "Wärmeleitfähigkeit bis 100 m",
    description: "Karte zur mittleren Wärmeleitfähigkeit bis 100 m (in W/mK) Alle im Geologischen Landesamt vorhandenen Bohrungen (Stand: Jan. 2019), die eine Tiefe von mindestens 40 m aufweisen sind mit den in Hambur",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mittlere_waermeleitfaehigkeit_100m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "waermeleitfaehigkeit-bis-80-m15",
    title: "Wärmeleitfähigkeit bis 80 m",
    description: "Karte zur mittleren Wärmeleitfähigkeit bis 80 m (in W/mK) Alle im Geologischen Landesamt vorhandenen Bohrungen (Stand: Jan. 2019), die eine Tiefe von mindestens 40 m aufweisen sind mit den in Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mittlere_waermeleitfaehigkeit_80m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "waermeentzugsleistung-bis-80-m9",
    title: "Wärmeentzugsleistung bis 80 m",
    description: "Karte zur geothermischen Wärmeentzugsleistung bis 80 m (in W/m) Alle im Geologischen Landesamt vorhandenen Bohrungen, die eine Tiefe von mindestens 40 m aufweisen sind mit den Werten der geothermisch",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:waermeentzugsleistung_bis_80m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "waermeentzugsleistung-bis-40-m9",
    title: "Wärmeentzugsleistung bis 40 m",
    description: "Karte zur geothermischen Wärmeentzugsleistung bis 40 m (in W/m) Alle im Geologischen Landesamt vorhandenen Bohrungen, die eine Tiefe von mindestens 40 m aufweisen sind mit den Werten der geothermisch",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:waermeentzugsleistung_bis_40m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grundwassergleichen-max17",
    title: "Grundwassergleichen Max",
    description: "Grundwassergleichen in Meter NHN des hydrologischen Jahres 2018 (maximale/höchste Grundwasserstände im 1. Hauptgrundwasserleiter). Die Daten werden als WMS-Darstellungsdienst und als WFS-Downloaddiens",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:u12_l_gleichenplan_max",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "waermeleitfaehigkeit-bis-60-m15",
    title: "Wärmeleitfähigkeit bis 60 m",
    description: "Karte zur mittleren Wärmeleitfähigkeit bis 60 m (in W/mK) Alle im Geologischen Landesamt vorhandenen Bohrungen (Stand: Jan. 2019), die eine Tiefe von mindestens 40 m aufweisen sind mit den in Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "nutzungsbedingungen-geothermie30",
    title: "Nutzungsbedingungen Geothermie",
    description: "Nutzungsbedingungen Geothermie Die Karte der Nutzungsbedingungen zeigt die Bereiche mit Einschränkungen für die Errichtung von Erdwärmesondenanlagen auf. Aus Gründen des vorbeugenden Grundwasserschut",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:nutzungsbedingungen_geothermie",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["grün", "wasser"]
  },
  {
    id: "temperatur-in-minus-100-mnhn22",
    title: "Temperatur in minus 100 mNHN",
    description: "Karte zur Temperaturverteilung in einer Tiefe von -100 mNHN Datengrundlage sind gemessene Temperaturprofile an ca. 130 tiefen Grundwassermessstellen. Diese Temperaturprofile dienen als Grundlage für",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:temperatur_in_minus_100mnhn",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "waermeentzugsleistung-bis-100-m9",
    title: "Wärmeentzugsleistung bis 100 m",
    description: "Karte zur geothermischen Wärmeentzugsleistung bis 100 m (in W/m) Alle im Geologischen Landesamt vorhandenen Bohrungen, die eine Tiefe von mindestens 40 m aufweisen sind mit den Werten der geothermisc",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:waermeentzugsleistung_bis_100m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grundwassergleichen-obks-200824",
    title: "Grundwassergleichen OBKS 2008",
    description: "Die Grundwassergleichen des oberen, tertiären Grundwasserleiters, der Oberen Braunkohlensande, sind als Isolinienkarte (Grundwassergleichen in m NHN des hydrologischen Jahres 2008) in digitaler Form v",
    url: "https://geodienste.hamburg.de/HH_WFS_Hydrogeologie?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "waermeentzugsleistung-bis-60-m9",
    title: "Wärmeentzugsleistung bis 60 m",
    description: "Karte zur geothermischen Wärmeentzugsleistung bis 60 m (in W/m) Alle im Geologischen Landesamt vorhandenen Bohrungen, die eine Tiefe von mindestens 40 m aufweisen sind mit den Werten der geothermisch",
    url: "https://geodienste.hamburg.de/HH_WFS_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:waermeentzugsleistung_bis_60m",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grundwassergleichen-ubks-200824",
    title: "Grundwassergleichen UBKS 2008",
    description: "Die Grundwassergleichen des unteren, tertiären Grundwasserleiters, der Unteren Braunkohlensande, sind als Isolinienkarte (Grundwassergleichen in m NHN des hydrologischen Jahres 2008) in digitaler Form",
    url: "https://geodienste.hamburg.de/HH_WFS_Hydrogeologie?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "geothermisch-ausgewertete-bohrungen28",
    title: "Geothermisch ausgewertete Bohrungen",
    description: "Alle im Geologischen Landesamt vorhandenen Bohrungen, die eine Teufe von mindestens 40 m aufweisen sind mit den Werten der geothermischen Entzugsleistung (nach VDI 4640) ausgewertet worden. Die in 10",
    url: "https://geodienste.hamburg.de/HH_WFS_Bohrarchiv_Geothermie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:geothermie",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "verkehrszaehlstellen-hamburg12",
    title: "Verkehrszählstellen Hamburg",
    description: "Der Datensatz enthält Verkehrszählstellen in Hamburg für den Kfz-, Rad- und Fußverkehr. Inhalt der Daten ist der Ort, die Lagebezeichnung und das Datum der letzten Zählung. Es erfolgt keine Untersche",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehrszaehlstellen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "feinkartierung-gruen-hamburg2",
    title: "Feinkartierung Grün Hamburg",
    description: "Der Geodatensatz Feinkartierung Grün bildet die die innere Struktur der öffentlichen Grün- und Erholungsanlagen der Freien und Hansestadt Hamburg (FHH) ab. Der Datensatz versteht sich als Bestandserf",
    url: "https://geodienste.hamburg.de/wfs_feinkartierung_gruen?Service=WFS&Request=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["grün"]
  },
  {
    id: "gewaesser-einzugsgebiete-hamburg9",
    title: "Gewässer-Einzugsgebiete Hamburg",
    description: "Dieser Dienst enthält als WMS-Darstellungsdienst und WFS-Downloaddienst unterschiedliche Ebenen der Gewässereinzugsgebiete in Hamburg. Die Einteilung erfolgt nach der Richtlinie für die Gebietsbezeic",
    url: "https://geodienste.hamburg.de/HH_WFS_Gewaesser_Einzugsgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "radnetz-hamburg1",
    title: "Radnetz Hamburg",
    description: "Das Radnetz ist das gesamtstädtische Netz für den Alltagsradverkehr in Hamburg und erschließt stadtweit wichtige Alltagsziele wie Wohngebiete in der inneren und äußeren Stadt, Stadtteilzentren und Arb",
    url: "https://geodienste.hamburg.de/wfs_radnetz?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "oeffentliche-bibliotheken-hamburg11",
    title: "Öffentliche Bibliotheken Hamburg",
    description: "Die Stiftung Hamburger Öffentliche Bücherhallen unterhält das öffentliche Bibliothekssystem der Freien und Hansestadt Hamburg. Die Bücherhallen Hamburg sind Hamburgs größte Kultureinrichtung und verf",
    url: "https://geodienste.hamburg.de/HH_WFS_Oeffentliche_Bibliotheken?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Stiftung Hamburger Öffentliche Bücherhallen (Bücherhallen Hamburg)",
    keywords: []
  },
  {
    id: "inspire-hh-verwaltungseinheiten-alkis18",
    title: "INSPIRE HH Verwaltungseinheiten ALKIS",
    description: "Mit diesem Datensatz wird die Landesgrenze von Hamburg im INSPIRE-Zielmodell bereitgestellt. Der Datensatz wurde aus ALKIS transformiert. Auf eine zusätzliche Ableitung aus ATKIS wurde verzichtet,",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-hydro-physische-gewaesser-alkis10",
    title: "INSPIRE HH Hydro-Physische Gewässer ALKIS",
    description: "Der Datensatz enthält die Binnengewässer für Hamburg aus dem Quelldatenbestand von ALKIS. Basis für ALKIS® ist ein von der Arbeitsgemeinschaft der Vermessungsverwaltungen der Länder der Bundesrepubli",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Hydro_Physische_Gewaesser_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "durchfahrtsbeschraenkungen-fuer-dieselfahrzeuge-hamburg12",
    title: "Durchfahrtsbeschränkungen für Dieselfahrzeuge Hamburg",
    description: "Dieser Datensatz ist nicht mehr aktuell, da die Durchfahrtsbeschränkungen für Dieselfahrzeuge im September 2023 aufgehoben wurden. Die zugehörigen WMS- und WFS-Dienste wurden abgeschaltet. Der Date",
    url: "https://geodienste.hamburg.de/HH_WFS_Dieselbeschraenkung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "hamburger-wohnlagenverzeichnis33",
    title: "Hamburger Wohnlagenverzeichnis",
    description: "Das Hamburger Wohnlagenverzeichnis ist eine Auflistung aller bewerteten Straßenabschnitte (Blockseiten) in Hamburger Wohngebieten. Es handelt sich hierbei nicht um ein amtliches Verzeichnis, sondern",
    url: "https://geodienste.hamburg.de/HH_WFS_Wohnlagen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "biotopkataster-hamburg24",
    title: "Biotopkataster Hamburg",
    description: "Daten und Karten zu Lebensräumen von Pflanzen und Tieren unter besonderer Berücksichtigung der gesetzlich geschützten Biotope. Grundlage für die Datenerfassung der Biotope/Lebensräume von Hamburg sin",
    url: "https://geodienste.hamburg.de/HH_WFS_Biotopkataster?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "digitaler-gruenplan-kataster-der-oeffentlichen-gruenanlagen16",
    title: "Digitaler Grünplan / Kataster der öffentlichen Grünanlagen",
    description: "Informationen über alle geführten Grünarten - Spielplätze, Parkanlagen, Allgemeines Grün, Wanderwege, Grün an Kleingärten, Kleingärten, Dauerkleingärten, Schutzgrün, Sportplätze und Friedhöfe. Wesen",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenplan?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["park", "grün", "port"]
  },
  {
    id: "bodenversiegelung-und-bodenbedeckung-hamburg1",
    title: "Bodenversiegelung und Bodenbedeckung Hamburg",
    description: "Versiegelungskarte und Bodenbedeckung: Mit der Beschreibung des Ausmaßes der Bodenversiegelung kann sowohl ein quantitativer Überblick über die Ausdehnung städtischer Siedlungsräume gegeben als auch",
    url: "https://geodienste.hamburg.de/wfs_versiegelung_bedeckung_hamburg?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "ladeinfrastruktur-ausbaugebiete-hamburg6",
    title: "Ladeinfrastruktur Ausbaugebiete Hamburg",
    description: "Der Datensatz enthält die Gebiete, die für den weiteren Aufbau von Ladeinfrastruktur für Elektrofahrzeuge innerhalb des öffentlichen Raums der Freien und Hansestadt Hamburg (FHH) vorgesehen sind. Dies",
    url: "https://geodienste.hamburg.de/wfs_ladeinfrastruktur_ausbaugebiete?Service=WFS&Version=2.0.0&Request=GetCapabilities",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: []
  },
  {
    id: "sozialraeumliche-angebote-der-jugend-und-familienhilfe-sajf-hamburg11",
    title: "Sozialräumliche Angebote der Jugend- und Familienhilfe (SAJF) Hamburg",
    description: "Sozialräumliche Angebote der Jugend- und Familienhilfe (SAJF) bieten alltagspraktische Unterstützung und Beratung für Familien und junge Menschen. Die Nutzung der Angebote ist freiwillig und kostenfre",
    url: "https://geodienste.hamburg.de/HH_WFS_Sozialraeumliche_Angebote_der_Jugend-_und_Familienhilfe?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial"]
  },
  {
    id: "jugend-aktiv-plus-hamburg12",
    title: "Jugend aktiv plus Hamburg",
    description: "Das Projekt zielt darauf ab, junge Erwachsene mit vielfältigen Problemlagen im Alter von 18 bis 25 Jahren sowie (Allein-) Erziehende bis 27 Jahren sozial zu stabilisieren und beruflich zu integrieren.",
    url: "https://geodienste.hamburg.de/HH_WFS_Jugend_Aktiv_Plus?service=WFS&request=DescribeFeatureType&version=2.0.0&typename=de.hh.up:jugend_aktiv_plus",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial"]
  },
  {
    id: "sozialraeumliche-integrationsnetzwerke-sin-hamburg11",
    title: "Sozialräumliche Integrationsnetzwerke (SIN) Hamburg",
    description: "Rund um die Unterkünfte für Geflüchtete wurden sozialräumlich ausgerichtete Angebote entwickelt, die die Integration der Familien in die Wohnquartiere verbessern und Teilhabe am sozialen Leben ermögli",
    url: "https://geodienste.hamburg.de/HH_WFS_Sozialraeumliche_Integration_SIN?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial"]
  },
  {
    id: "gesundheitliche-beratungs-und-praeventionsangebote-hamburg4",
    title: "Gesundheitliche Beratungs- und Präventionsangebote Hamburg",
    description: "Die hier dargestellten gesundheitlichen Beratungs- und Präventionsangebote umfassen folgende Angebote: Essstörungsberatung: Beratung von Menschen, die an einer Essstörung erkrankt sind oder sich ggf.",
    url: "https://geodienste.hamburg.de/wfs_gesundheit_beratung_praevention?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["gesundheit"]
  },
  {
    id: "suchthilfe-hamburg10",
    title: "Suchthilfe Hamburg",
    description: "Einrichtungen der Drogen- und Suchthilfe",
    url: "https://geodienste.hamburg.de/HH_WFS_Suchthilfe?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:egh_drogen_sucht",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "integrationsangebote-fuer-zugewanderte-hamburg13",
    title: "Integrationsangebote für Zugewanderte Hamburg",
    description: "Die Beratung der Integrationszentren richtet sich an bleibeberechtigte Erwachsene, die schon länger hier leben und unterstützt bei Fragen des täglichen Lebens. Sie hilft zum Beispiel bei Problemen mit",
    url: "https://geodienste.hamburg.de/HH_WFS_Integrationsangebote_Zugewanderte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "beratungsstellen-fuer-kommunale-leistungen-nach-16-a-sgb-ii-hamburg12",
    title: "Beratungsstellen für kommunale Leistungen nach § 16 a SGB II Hamburg",
    description: "Kommunale Eingliederungsleistungen gemäß § 16 a SGB II haben das Ziel, zur Verwirklichung einer ganzheitlichen und umfassenden Betreuung und Unterstützung bei der Eingliederung in Arbeit beizutragen.",
    url: "https://geodienste.hamburg.de/HH_WFS_beratungsstellen_sgb_ii?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "opferberatungsstellen-hamburg14",
    title: "Opferberatungsstellen Hamburg",
    description: "Die Opferberatungsstellen in Hamburg beraten zu unterschiedlichen Themen.",
    url: "https://geodienste.hamburg.de/HH_WFS_Opferberatungsstellen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "vollstationaere-pflegeeinrichtungen-hamburg11",
    title: "Vollstationäre Pflegeeinrichtungen Hamburg",
    description: "Der Datensatz enthält die Standorte der vollstationären Pflegeeinrichtungen in Hamburg (Wohneinrichtungen gemäß §2(4), HmbWBG), inkl. der Platzzahlen. Weitere Informationen zu den Einrichtungen sind",
    url: "https://geodienste.hamburg.de/HH_WFS_Vollstationaere_Pflegeeinrichtungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:vollstationaere_pflegeeinrichtungen",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "angebote-fuer-familien-hamburg15",
    title: "Angebote für Familien Hamburg",
    description: "Es werden die Datensätze der Bezirksämter und der Sozialbehörde zu bezirklichen und überregionalen Angeboten im Bereich der Familienbildung und -beratung, Erziehungsberatung, Frühen Hilfen, Beratung b",
    url: "https://geodienste.hamburg.de/HH_WFS_Familien_Angebote?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:kinder_familienzentrum,de.hh.up:institutionelle_erziehungsberatung,de.hh.up:elternschule,de.hh.up:ueberreg_projekte,de.hh.up:ueberregionale_beratungsstelle,de.hh.up:sonstige,de.hh.up:eltern_kind_zentrum,de.hh.up:familienteam,de.hh.up:muetterzentrum,de.hh.up:lotsendienst_geburtsklinik,de.hh.up:elternlotsenprojekt,de.hh.up:konfessionelle_familienbildungsstaette",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["bildung", "sozial"]
  },
  {
    id: "beratung-zur-kindertagesbetreuung-und-kindertagespflege-hamburg15",
    title: "Beratung zur Kindertagesbetreuung und Kindertagespflege Hamburg",
    description: "Beratung zur Kindertagesbetreuung Das für Ihren Bezirk zuständige Fachamt für Jugend- und Familienhilfe (Jugendamt) bzw. das Soziale Dienstleistungszentrum (SDZ) berät in allen Fragen zur Kindertagesb",
    url: "https://geodienste.hamburg.de/HH_WFS_Beratung_Kitabetreuung_Kitapflege?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:abteilung_kitabetreuung",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial", "kinder"]
  },
  {
    id: "praevention-und-sexuelle-gesundheit-hamburg7",
    title: "Prävention und sexuelle Gesundheit Hamburg",
    description: "CASAblanca: Beratungsstelle für HIV und sexuell übertragbare Infektionen (STI). Das Angebot beinhaltet Präventionsberatung und Testung und ist kostenlos und anonym. Zielgruppen sind Menschen mit Infor",
    url: "https://geodienste.hamburg.de/HH_WFS_Praevention_und_sexuelle_Gesundheit?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["gesundheit"]
  },
  {
    id: "rahmenvereinbarung-rv-schule-jugendhilfe-hamburg14",
    title: "Rahmenvereinbarung (RV) Schule - Jugendhilfe Hamburg",
    description: "RV Schule-Jugendhilfe - integrierte Angebote: Ziel von integrierten Angeboten als Kooperation zwischen Schule und Jugendhilfe nach Rahmenvereinbarung/RV (siehe Link unter Verweise) ist es, Kinder und",
    url: "https://geodienste.hamburg.de/HH_WFS_RV_Schule_Jugendhilfe?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["schule", "kinder"]
  },
  {
    id: "muetterberatung-hamburg3",
    title: "Mütterberatung Hamburg",
    description: "Die Mütterberatungsstellen beim Kinder- und Jugendgesundheitsdienst der Bezirke bieten mit Sprechstunden, Hausbesuchen und Gruppenveranstaltungen ein gesundheitlich vorbeugendes Beratungsangebot für E",
    url: "https://geodienste.hamburg.de/wfs_muetterberatung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["gesundheit", "kinder"]
  },
  {
    id: "betreuungsquote-kindertagesbetreuung-hamburg11",
    title: "Betreuungsquote Kindertagesbetreuung Hamburg",
    description: "Die Betreuungsquoten zeigen die nachfragegerechte Entwicklung des Leistungsangebots der Kindertagesbetreuung je Stadtteil und Bezirk auf, differenziert nach Krippenbereich (0 - 3 Jahre) und Elementarb",
    url: "https://geodienste.hamburg.de/HH_WFS_Betreuungsquote_Kindertagesbetreuung?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:betr_quoten_bezirke,de.hh.up:betr_quoten_stadtteile",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["kinder"]
  },
  {
    id: "allgemeiner-sozialer-dienst-asd-hamburg13",
    title: "Allgemeiner Sozialer Dienst (ASD) Hamburg",
    description: "Der Allgemeine Soziale Dienst ist Teil des Fachamtes Jugend- und Familienhilfe (Jugendamt) im Bezirk. Zu seinen Aufgaben gehört es, Kinder vor Gefährdungen zu bewahren und Eltern bei der Erziehung ihr",
    url: "https://geodienste.hamburg.de/HH_WFS_ASD?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:standorte",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial", "kinder"]
  },
  {
    id: "anteile-kinder-mit-nicht-deutscher-familiensprache-in-kitas-hamburg11",
    title: "Anteile Kinder mit nicht-deutscher Familiensprache in Kitas Hamburg",
    description: "Die Quoten zeigen die Relation der Anzahl der betreuten Kinder mit nicht-deutscher Familiensprache zu allen betreuten Kindern in Kitas im Krippen- und Elementarbereich je Stadtteil und Bezirk.",
    url: "https://geodienste.hamburg.de/HH_WFS_Anteile_Kinder_nicht_deutscher_Familiensprache_Kitas?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:anteil_familiensprache_stadtteile,de.hh.up:anteil_familiensprache_bezirke",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["kinder"]
  },
  {
    id: "begegnungsstaetten-assistenz-in-der-sozialpsychiatrie-hamburg",
    title: "Begegnungsstätten Assistenz in der Sozialpsychiatrie Hamburg",
    description: "Über die Leistung der Eingliederungshilfe \"Assistenz in der Sozialpsychiatrie\" gibt es in Hamburg ein dichtes Netzwerk von Begegnungsstätten. Die Begegnungsstätten sind einerseits für Leistungsbe...",
    url: "https://geodienste.hamburg.de/HH_WFS_Ambulante_Sozialpsychatrie?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:amb_sozialpsychatrie",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial"]
  },
  {
    id: "uebernachtungs-und-versorgungsangebote-fuer-obdachlose-und-wohnungslose-menschen-hamburg13",
    title: "Übernachtungs- und Versorgungsangebote für obdachlose und wohnungslose Menschen Hamburg",
    description: "Niedrigschwellige Angebote für obdach- oder wohnungslose Menschen für den Aufenthalt am Tag und in der Nacht sowie für die Beratung zur Überwindung der prekären Lebenslage.",
    url: "https://geodienste.hamburg.de/HH_WFS_Uebernachtungsangebote?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:uebernachtungsangebote",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "pflegestuetzpunkte-hamburg9",
    title: "Pflegestützpunkte Hamburg",
    description: "Pflegestützpunkte beraten hilfe- und pflegebedürftige Menschen und ihre Angehörigen. Sie unterstützen in allen Fragen rund um das Thema Pflege - unabhängig von der Kassenzugehörigkeit oder dem Bezug v",
    url: "https://geodienste.hamburg.de/HH_WFS_Pflegestuetzpunkte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:pflegestuetzpunkte",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "werkstaetten-fuer-menschen-mit-behinderung-hamburg7",
    title: "Werkstätten für Menschen mit Behinderung Hamburg",
    description: "Werkstätten für Menschen mit Behinderung bieten auf Grundlage von §§ 219ff. i.V. mit §§ 56ff. SGB IX Menschen, bei denen nicht oder noch nicht wieder eine Beschäftigung auf dem allgemeinen Arbeitsmark",
    url: "https://geodienste.hamburg.de/HH_WFS_Werkstaetten_Menschen_Behinderung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "angebote-und-nutzung-der-jugendsozialarbeit-hamburg17",
    title: "Angebote und Nutzung der Jugendsozialarbeit Hamburg",
    description: "Es werden an dieser Stelle die Datensätze der Bezirksämter im Bereich \"Jugendsozialarbeit\" beschrieben: Standorte der Einrichtungen der Jugendsozialarbeit und zusätzliche Informationen zum Angebo...",
    url: "https://geodienste.hamburg.de/HH_WFS_JSA?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["sozial"]
  },
  {
    id: "frauenberatung-hamburg14",
    title: "Frauenberatung Hamburg",
    description: "Frauenberatungsstellen fördern die Gleichstellung von Frauen in der Gesellschaft. Die Beratungsarbeit orientiert sich an den Lebenssituationen von Frauen und damit verbundenen Themen wie z.B. Partners",
    url: "https://geodienste.hamburg.de/HH_WFS_Frauenberatung_Hamburg?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "tagesfoerderstaetten-hamburg5",
    title: "Tagesförderstätten Hamburg",
    description: "Tagesförderstätten bieten gem. § 113 i.V. mit § 81 SGB IX Menschen mit Behinderung, die kein Mindestmaß an wirtschaftlich verwertbarer Arbeit erbringen, eine Tagesstruktur. Die Leistung der Einglieder",
    url: "https://geodienste.hamburg.de/wfs_tagesfoerderstaetten?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "baustellen-auf-hauptverkehrs-und-bundesfernstrassen-hamburg27",
    title: "Baustellen auf Hauptverkehrs-und Bundesfernstraßen Hamburg",
    description: "Baustellenkoordinierung in Hamburg Der Erhalt der Infrastruktur ist von elementarer Bedeutung für die Entwicklung Hamburgs. Daher gehören Baustellen im Straßenraum zum normalen Bild - zum Leidwesen vo",
    url: "https://geodienste.hamburg.de/wfs_hh_baustellen?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "strassen-und-wegenetz-hamburg-hh-sib31",
    title: "Straßen- und Wegenetz Hamburg (HH-SIB)",
    description: "Der Datensatz enthält die Straßen und Wege Hamburgs mit verschiedenen Merkmalen. Das Straßen- und Wegenetz wird in der Hamburger Straßeninformationsbank (HH-SIB) in einem Knoten-Kanten-Modell gehalten",
    url: "https://geodienste.hamburg.de/HH_WFS_Strassen_und_Wegenetz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bab_ast",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "aktuelle-verkehrsinformationen-polizei-hamburg1",
    title: "Aktuelle Verkehrsinformationen Polizei Hamburg",
    description: "Diese Verkehrsinformationen werden von der Landesmeldestelle der Polizei Hamburg erstellt und im Verkehrswarndienst veröffentlicht.",
    url: "https://geodienste.hamburg.de/wfs_verkehrsinformation?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Inneres und Sport",
    keywords: ["verkehr"]
  },
  {
    id: "hvv-switch-punkte-hamburg5",
    title: "hvv switch Punkte Hamburg",
    description: "Der Datensatz enthält die Standorte aller geplanten und in Betrieb befindlichen hvv switch Punkte in Hamburg. hvv switch Punkte verbinden das klassische Angebot des ÖPNV mit alternativen Mobilitätsan",
    url: "https://geodienste.hamburg.de/wfs_switch?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "zulaessige-hoechstgeschwindigkeiten-hamburg14",
    title: "Zulässige Höchstgeschwindigkeiten Hamburg",
    description: "Der Datensatz enthält die zulässigen Höchstgeschwindigkeiten für das Hamburger Straßennetz sowie zusätzliche Informationen zu Tempo-20- und Tempo-30-Zonen, verkehrsberuhigten Bereichen und Sonderregel",
    url: "https://geodienste.hamburg.de/HH_WFS_Zulaessige_Hoechstgeschwindigkeiten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:zulaessige_hoechstgeschwindigkeiten",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "tempo-30-nachts-hamburg20",
    title: "Tempo 30 nachts Hamburg",
    description: "Dieser Datensatz wird nicht mehr gepflegt. Sie finden die Strecken mit Tempo 30 nachts nun im Datensatz \"Zulässige Höchstgeschwindigkeiten Hamburg\" im Layer Sonderregelungen zulässige Höchstgesch...",
    url: "https://geodienste.hamburg.de/HH_WFS_Tempo_30_nachts?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "inspire-hh-flurstuecke-grundstuecke-alkis5",
    title: "INSPIRE HH Flurstücke/Grundstücke ALKIS",
    description: "Dieser Datensatz enthält die Flurstücke, Flurstücksnummer und die Gemarkungen aus dem vorhandenen Datenmodell ALKIS. Sie wurden in das INSPIRE Zielmodell transformiert. Im Amtlichen Liegenschaftskat",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Flurstuecke?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "ertragsmesszahlen-hamburg13",
    title: "Ertragsmesszahlen Hamburg",
    description: "Alle landwirtschaftlich nutzbaren Flächen unterliegen aus Gründen einer einheitlichen Besteuerung der Bodenschätzung. Die Ertragsmesszahl (EMZ) ist ein Index für die natürliche Ertragsfähigkeit eine",
    url: "https://geodienste.hamburg.de/ertragsmesszahlen_hamburg?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["grün"]
  },
  {
    id: "geologische-karte-1-50-000-hamburg13",
    title: "Geologische Karte 1:50 000 Hamburg",
    description: "Geologische Karte des Hamburger Raums (Busse 1989), untergliedert nach: 1. geologische Kürzel, 2. Genese, 3. Kaltzeiten, 4. Erdzeitalter, 5. pethrograhpischer Hauptgemengteil.",
    url: "https://geodienste.hamburg.de/HH_WFS_Geologische_Karte_50000?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:genese",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grundwassergleichen-min16",
    title: "Grundwassergleichen Min",
    description: "Grundwassergleichen in Meter NHN des hydrologischen Jahres 2019 (minimale/niedrige Grundwasserstände im 1. Hauptgrundwasserleiter). Die Daten werden als WMS-Darstellungsdienst und als WFS-Downloaddie",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:u12_l_gleichenplan_min",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "naturdenkmale-in-hamburg27",
    title: "Naturdenkmale in Hamburg",
    description: "Die Naturdenkmale des Nationalparks werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt. Als Naturdenkmal können Einzelschöpfungen der Natur, deren besonderer Schutz aus w",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:nr_f_naturdenkmal",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["park"]
  },
  {
    id: "grundwassergleichen-mittel12",
    title: "Grundwassergleichen Mittel",
    description: "Grundwassergleichen in Meter NHN des hydrologischen Jahres 2010 (mittlere Grundwasserstände im 1. Hauptgrundwasserleiter). Die Daten werden als WMS-Darstellungsdienst und als WFS-Downloaddienst berei",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:u12_l_gleichenplan_mittel_2010",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "ringstrassen-hamburg16",
    title: "Ringstraßen Hamburg",
    description: "Der Datensatz enthält die drei Hamburger Ringstraßen Ring 1, Ring 2 und Ring 3. Die Ringstraßen wurden in den 70er Jahren zur Lenkung des Verkehrs innerhalb der Stadt definiert. Sie verlaufen nördlich",
    url: "https://geodienste.hamburg.de/HH_WFS_Ringstrassen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ring1",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "geologische-profilschnitte-hamburg26",
    title: "Geologische Profilschnitte Hamburg",
    description: "Im Rahmen des Modellaufbaus des geologischen 3D-Strukturmodells für Hamburg wurden Insgesamt 70 vernetzte geologische Profilschnitte erstellt. Sie zeigen den quartären und tertiären geologischen Unter",
    url: "https://geodienste.hamburg.de/HH_WFS_Geologische_Profilschnitte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:geologische_profilschnitte",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "geologische-karte-1-5-000-hamburg15",
    title: "Geologische Karte 1:5 000 Hamburg",
    description: "Die Geologische Karte 1:5 000 liegt digital vor. Sie wird laufend aktualisiert, als Geodatendienst veröffentlicht und gegebenenfalls in digitaler Form auch auf CD abgegeben.",
    url: "https://geodienste.hamburg.de/HH_WFS_Geologische_Karte_5000?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:geologische_karte_5000",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "fluglaerm-siedlungsbeschraenkungsbereich17",
    title: "Fluglärm - Siedlungsbeschränkungsbereich",
    description: "Mit der Senatsdrucksache Nr. 96/1261 vom 23.09.1996 hat der Senat Regelungen zur Siedlungsplanung im fluglärmbelasteten Bereich des Flughafens Hamburg beschlossen. Darin werden zwei Bereiche mit unter",
    url: "https://geodienste.hamburg.de/HH_WFS_Siedlungsbeschraenkungsbereiche?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["hafen"]
  },
  {
    id: "winterdienst-fuer-den-radverkehr-durch-hpa-hamburg12",
    title: "Winterdienst für den Radverkehr durch HPA Hamburg",
    description: "Radwegenetz im Hamburger Hafen als Grundlage für die Winterdienstplanung",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafengebietsgrenzen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:hafengebietsgrenzen",
    organization: "Hamburg Port Authority",
    keywords: ["rad", "verkehr", "hafen"]
  },
  {
    id: "naturschutzgebiete-in-hamburg27",
    title: "Naturschutzgebiete in Hamburg",
    description: "Die Schutzgebietsgrenzen der Naturschutzgebiete werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt. Hamburg liegt bei der Ausweisung von Naturschutzgebieten bundesweit vo",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:nr_f_naturschutzgebiet",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "einbahnstrassen-hamburg9",
    title: "Einbahnstraßen Hamburg",
    description: "Der Datensatz enthält alle \"echten\" Einbahnstraßen in Hamburg, d.h. alle Einbahnstraßen, die mit entsprechender Einbahnstraßenbeschilderung (VZ 220 und VZ 267) gekennzeichnet sind. Quelle ist die H",
    url: "https://geodienste.hamburg.de/HH_WFS_Einbahnstrassen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:einbahnstrassen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "vogelschutzgebiete-in-hamburg26",
    title: "Vogelschutzgebiete in Hamburg",
    description: "Die Schutzgebietsgrenzen der Vogelschutzgebiete werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt.",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "bezirksstrassen-mit-gesamtstaedtischer-bedeutung-bsgb-hamburg12",
    title: "Bezirksstraßen mit gesamtstädtischer Bedeutung (BSGB) Hamburg",
    description: "Der Datensatz umfasst nicht klassifizierte Straßen mit gesamtstädtischer Bedeutung, die keine Hauptverkehrsstraßen sind. Diese Straßen werden z.B. im Rahmen des Erhaltungsmanagements des Landesbetrieb",
    url: "https://geodienste.hamburg.de/HH_WFS_BSGB_Netz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "geotope-in-hamburg24",
    title: "Geotope in Hamburg",
    description: "Die Hamburger Geotope und deren Beschreibung.",
    url: "https://geodienste.hamburg.de/HH_WFS_Geotourismus?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "biosphaerenreservate-in-hamburg12",
    title: "Biosphärenreservate in Hamburg",
    description: "Die Schutzgebietsgrenzen der Biosphärenreservate werden als Vektorkoordinaten gemäß Koordinatensystem EPSG:25832 bereitgestellt.",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "bedarfsumleitungen-hamburg22",
    title: "Bedarfsumleitungen Hamburg",
    description: "Dieser Datensatz beschreibt die in der HH-SIB abgelegten spezielle Umleitungen für Autobahnen und autobahnähnlich ausgebaute Bundesstraßen, die durch das Verkehrszeichen Nr. 460 bzw. Nr. 455 der Straß",
    url: "https://geodienste.hamburg.de/HH_WFS_Bedarfsumleitungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bedarfsumleitungen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr", "bahn"]
  },
  {
    id: "lichtsignalanlagen-hafen-hamburg4",
    title: "Lichtsignalanlagen Hafen Hamburg",
    description: "Der Datensatz enthält Lage, Namen und Knotennummer aller Lichtsignalanlagen im Hamburger Hafengebiet in Zuständigkeit der HPA (Hamburg Port Authority).",
    url: "https://geodienste.hamburg.de/HH_WFS_Lichtsignalanlagen_Hafen?Service=WFS&REQUEST=GetCapabilities",
    organization: "Hamburg Port Authority",
    keywords: ["hafen", "port"]
  },
  {
    id: "hafengebietsgrenzen-hamburg28",
    title: "Hafengebietsgrenzen Hamburg",
    description: "Vektordaten der Hafengebietsgrenze. Bei den vorliegenden Daten handelt es sich um eine grafische Umsetzung / Interpretation des im Hafenentwicklungsgesetz festgeschriebenen Grenzverlaufes. Rechtsverbi",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafengebietsgrenzen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:hafengebietsgrenzen",
    organization: "Hamburg Port Authority",
    keywords: ["hafen"]
  },
  {
    id: "tempo-30-zonen-hamburg18",
    title: "Tempo-30-Zonen Hamburg",
    description: "Dieser Datensatz wird nicht mehr gepflegt. Sie finden die Tempo-30-Zonen nun im Datensatz \"Zulässige Höchstgeschwindigkeiten Hamburg\" im Layer Tempo-30-Zonen.",
    url: "https://geodienste.hamburg.de/HH_WFS_Tempo_30_Zonen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:tempo_30_zonen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "geologische-karte-praequartaerer-untergrund-1-50-000-hamburg13",
    title: "Geologische Karte Präquartärer Untergrund 1:50 000 Hamburg",
    description: "Das Hamburger Stadtgebiet ist komplett von quartären Sedimenten bedeckt. Die Geologische Karte \"Präquartärer Untergrund 1:50.000\" stellt den Untergrund Hamburgs ohne die quartären Schichtfolgen d...",
    url: "https://geodienste.hamburg.de/HH_WFS_Praequartaerer_Untergrund?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:praequartaerer_untergrund",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "hauptverkehrsstrassen-hamburg19",
    title: "Hauptverkehrsstraßen Hamburg",
    description: "Der Datensatz enthält die Hauptverkehrsstraßen der Stadt Hamburg. Zum Netz der Hauptverkehrsstraßen gehören die Bundesstraßen (Freie Strecke und Ortsdurchfahrt) sowie sonstige Straßen, die für die Sta",
    url: "https://geodienste.hamburg.de/HH_WFS_Dynamisches_Koordinierungsnetz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "inspire-hh-gebaeude-alkis9",
    title: "INSPIRE HH Gebäude ALKIS",
    description: "Dieser Datensatz stellt die Gebäude der Freien und Hansestadt Hamburg aus dem Amtlichen Liegenschaftskatasterinformationssystem (ALKIS) im INSPIRE Zielmodell dar.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Gebaeude_2D_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["gebäude"]
  },
  {
    id: "gestaltungsverordnungen-hamburg25",
    title: "Gestaltungsverordnungen Hamburg",
    description: "Der Datenbestand wird seit dem 01.01.2019 nicht mehr fortgeführt. Gestaltungsverordnungen nach §81 Abs. 1 Nr. 2 HBauO Die Daten sind Teil des Datenbestands Digitales Informationssystems Planrecht",
    url: "https://geodienste.hamburg.de/HH_WFS_Gestaltungsverordnungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:gestaltungsverordnung",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "strassenverkehrsnetz-hamburg-inspire21",
    title: "Straßenverkehrsnetz Hamburg (INSPIRE)",
    description: "Der Datensatz enthält das Straßennetz Hamburgs, das aufgrund der INSPIRE-Datenspezifikation zum Anhang I - Thema Verkehrsnetze (Transport Networks) aus der Straßeninformationsbank (HH-SIB) ausgewählt",
    url: "https://geodienste.hamburg.de/DE_HH_WFS_INSPIRE_A1_7_Verkehrsnetze?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:strassennetz_inspire_bab",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr", "transport", "port"]
  },
  {
    id: "radschnellwege-vorzugstrassen-metropolregion-hamburg12",
    title: "Radschnellwege Vorzugstrassen Metropolregion Hamburg",
    description: "Der Datensatz enthält die Vorzugstrassen für künftige Radschnellwege in der Metropolregion Hamburg. Die Trassen wurden dort im Rahmen eines Leitprojekts erarbeitet. Radschnellwege sollen u. a. durch",
    url: "https://geodienste.hamburg.de/MRH_WFS_Radschnellwege?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:rsw_ahrensburg_mrh",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad"]
  },
  {
    id: "zeb-netz-der-hauptverkehrsstrassen-und-bezirksstrassen-mit-gesamtstaedtischer-bedeutung-hamburg12",
    title: "ZEB-Netz der Hauptverkehrsstraßen und Bezirksstraßen mit gesamtstädtischer Bedeutung Hamburg",
    description: "Dieser Datensatz zeigt ein Netz mit übergeordneter Bedeutung für das Erhaltungsmanagement, welches durch den Landesbetrieb Straßen, Brücken und Gewässer (LSBG) regelmäßig zum Zwecke der ZustandsErfass",
    url: "https://geodienste.hamburg.de/HH_WFS_ZEB_Netz_HVS_BSGB?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:zeb_netz_hvs_bsgb",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "strassenbaumkataster-hamburger-hafen22",
    title: "Straßenbaumkataster Hamburger Hafen",
    description: "Das Baumkataster umfasst die flächendeckende Darstellung der Bäume auf öffentlichen Straßenflurstücken als Grundlage der Baumkontrollen zur Verkehrssicherheit und der Planung. Wesentliche Datenfelder",
    url: "https://geodienste.hamburg.de/HH_WFS_Strassenbaumkataster?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Hamburg Port Authority",
    keywords: ["baum", "verkehr", "hafen"]
  },
  {
    id: "gefahrgutstrassen-hamburg21",
    title: "Gefahrgutstraßen Hamburg",
    description: "Dieser Datensatz beinhaltet die in der Hamburger Straßeninformationsbank (HH_SIB) ausgewiesenen Gefahrgutstraßen in Hamburg. Sie beruhen auf der Bekanntmachung der Behörde für Inneres und Sport (BIS)",
    url: "https://geodienste.hamburg.de/HH_WFS_Gefahrgutstrassen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:gefahrgutstrassen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["port"]
  },
  {
    id: "inspire-hh-verkehrsnetze-hh-sib14",
    title: "INSPIRE HH Verkehrsnetze HH-SIB",
    description: "Mit diesem Datensatz werden die Hamburger Verkehrsnetze aus der HH-SIB, transformiert in das INSPIRE-Zielmodell bereitgestellt.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Verkehrsnetze_SIB?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["verkehr"]
  },
  {
    id: "mautstrassen-hamburg25",
    title: "Mautstraßen Hamburg",
    description: "Der Datensatz enthält die mautpflichtigen Strecken auf den Bundesautobahnen und Bundesstraßen in den Landesgrenzen Hamburgs.",
    url: "https://geodienste.hamburg.de/HH_WFS_Mautstrassen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "inspire-hh-energiequellen14",
    title: "INSPIRE HH Energiequellen",
    description: "Es werden die Inhalte vom INSPIRE Thema Energiequellen des Datensatzes \"Standorte von Windkraftanlagen in Hamburg\" im INSPIRE Zielmodell bereitgestellt.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Energiequellen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["energie"]
  },
  {
    id: "inspire-hh-geologie14",
    title: "INSPIRE HH Geologie",
    description: "Es werden die Inhalte vom INSPIRE Thema Geologie aus \"GK50 – Petrographie\", \"GK50 - Präquartär\" und der \"Geologischen Karte 1: 5000\" im INSPIRE Zielmodell bereitgestellt.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Geologie?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-gebaeude-atkis-basis-dlm9",
    title: "INSPIRE HH Gebäude ATKIS Basis-DLM",
    description: "Dieser Datensatz stellt die Gebäude der Freien und Hansestadt Hamburg aus dem ATKIS Basis-DLM im INSPIRE Zielmodell dar. ATKIS® steht für Amtliches Topographisch-Kartographisches Informationssystem u",
    url: "https://geodienste.hamburg.de/HH_WFS_Gebaeude_2D_ATKIS_Basis_DLM?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["gebäude"]
  },
  {
    id: "laermschutzbereich-flughafen-hamburg13",
    title: "Lärmschutzbereich Flughafen Hamburg",
    description: "- Lärmaktionsplanung nach Umgebungslärmrichtlinie für den Ballungsraum Hamburg - Überwachung der Einhaltung von Nachtflugbeschränkungen und Erteilung von Ausnahmegenehmigungen; - Fluglärmbeschwerdem",
    url: "https://geodienste.hamburg.de/HH_WFS_Fluglaermschutzzonen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:nsz",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["hafen"]
  },
  {
    id: "milieugebiete-hamburg23",
    title: "Milieugebiete Hamburg",
    description: "Milieugebiete auf der Grundlage des Milieuschutzberichts vom 08.08.1985 . Der Bericht beschreibt die Milieus im Detail und nennt Instrumente, die zu ihrem Schutz dienen. Der Datenbestand wurde einma",
    url: "https://geodienste.hamburg.de/HH_WFS_Milieugebiete?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:milieugebiete",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "geologische-karte-quartaerbasis-1-50-000-hamburg13",
    title: "Geologische Karte Quartärbasis 1:50 000 Hamburg",
    description: "Die Quartärbasiskarte liegt als Höhenstufenkarte in digitaler Form vor. Die Karte stellt die Basis der quartären Ablagerungen und damit deren Mächtigkeit dar. Die Mächtigkeit dieser Ablagerungen der v",
    url: "https://geodienste.hamburg.de/HH_WFS_Quartaerbasis?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:quartaerbasis",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "inspire-hh-umweltueberwachung10",
    title: "INSPIRE HH Umweltüberwachung",
    description: "Dieser Datensatz stellt die Umweltüberwachungseinrichtungen aus dem Quelldatensatz \"Standorte des Straßenwetterinformationssystems SWIS Hamburg\" im INSPIRE Zielmodell dar.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Umweltueberwachung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["umwelt"]
  },
  {
    id: "bodenformengesellschaften-hamburg20",
    title: "Bodenformengesellschaften Hamburg",
    description: "Bodenformengesellschaften: Einheiten der Bodenkarte enthalten Bodenformengesellschaften. Die Übersichtskarte der Bodenformengesellschaften Hamburgs zeigt die Verbreitung charakteristischer Bodentypen",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenformen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bodenformen",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "inspire-hh-versorgungswirtschaft-und-staatliche-dienste11",
    title: "INSPIRE HH Versorgungswirtschaft und staatliche Dienste",
    description: "Dieser Datensatz stellt Inhalte zum Thema \"Versorgungswirtschaft und die staatlichen Dienste\" aus folgenden Quelldatensätzen im INSPIRE-Zielmodell dar: - Feuerwehrwachen Hamburg - Schulstammdaten u",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_VersorgW_u_staatl_Dienste?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-boden-alkis11",
    title: "INSPIRE HH Boden ALKIS",
    description: "Dieser Datensatz stellt die Informationen zum INSPIRE Thema Boden im Zielmodell dar. Quelldatenbestand ist das Amtliche Liegenschaftskatasterinformationssystem (ALKIS).",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Boden_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-adressen-hauskoordinaten18",
    title: "INSPIRE HH Adressen Hauskoordinaten",
    description: "Dieser Datensatz enthält die Daten der Hamburger Adressen abgeleitet aus den ALKIS-Hauskoordinaten, transformiert ins INSPIRE Zielmodell",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Adressen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-hydro-netzwerk-atkis-basis-dlm13",
    title: "INSPIRE HH Hydro-Netzwerk ATKIS Basis-DLM",
    description: "Der Datensatz enthält das Basis-Gewässernetz für Hamburg abgeleitet aus dem Quelldatenbestand ATKIS Basis-DLM. ATKIS® steht für Amtliches Topographisch-Kartographisches Informationssystem und ist als",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Gewaessernetze?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "park-ride-anlagen-hamburg29",
    title: "Park + Ride Anlagen Hamburg",
    description: "Der Datensatz enthält die Park + Ride Anlagen an Schnellbahnstationen im Hamburger Stadtgebiet mit Informationen u.a. über die Lage, die Anzahl der Stellplätze und die Anzahl von Behinderten- und Frau",
    url: "https://geodienste.hamburg.de/HH_WFS_P_und_R?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:p_und_r",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["park", "bahn"]
  },
  {
    id: "bike-ride-anlagen-hamburg33",
    title: "Bike + Ride Anlagen Hamburg",
    description: "Der Datensatz enthält die Lage der Fahrradabstellanlagen an Schnellbahnhaltestellen im Hamburger Stadtgebiet. Für jede Abstellanlage wird die Anzahl der öffentlichen Stellplätze (überdacht und nich",
    url: "https://geodienste.hamburg.de/HH_WFS_Bike_und_Ride?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bike_und_ride",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "bike", "fahrrad", "bahn"]
  },
  {
    id: "inspire-hh-geografische-bezeichnungen-atkis-basis-dlm16",
    title: "INSPIRE HH Geografische Bezeichnungen ATKIS Basis-DLM",
    description: "Dieser Datensatz stellt die geografischen Bezeichnungen von Hamburg aus dem ATKIS Basis-DLM Quellmodell im INSPIRE-Zielmodell dar. ATKIS® steht für Amtliches Topographisch-Kartographisches Informatio",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_GN_ATKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-bodenbedeckung-alkis11",
    title: "INSPIRE HH Bodenbedeckung ALKIS",
    description: "Dieser Datensatz stellt die Bodenbedeckung der Freien und Hansestadt Hamburg aus dem Amtlichen Liegenschaftskatasterinformationssystem (ALKIS) im INSPIRE Zielmodell dar.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Bodenbedeckungsvektor_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-bodennutzung-alkis12",
    title: "INSPIRE HH Bodennutzung ALKIS",
    description: "Dieser Datensatz stellt die Bodennutzung der Freien und Hansestadt Hamburg aus dem Amtlichen Liegenschaftskatasterinformationssystem (ALKIS) im INSPIRE Zielmodell dar.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Existierende_Bodennutzung_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "arten-und-biotopschutz-aubs-ehem-apro32",
    title: "Arten- und Biotopschutz - AuBS (ehem. APRO)",
    description: "Die Karte Arten- und Biotopschutz (AuBS) mit ihrem dazugehörigen Erläuterungsbericht ist ein wesentlicher, verbindlicher Bestandteil des Landschaftsprogramms. Sie beschreibt flächendeckende Entwicklu",
    url: "https://geodienste.hamburg.de/HH_WFS_AuBS?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:aubs_ebenen_apro_f_artenschutzprogramm",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "bodenkunde-profile23",
    title: "Bodenkunde-Profile",
    description: "Die Bodenprofile beschreiben die von der Erdoberfläche aus erfolgten senkrechten Schnitte durch Bodenkörper. Anhand der Profilschnitte können die verschiedenen Bodenhorizonte, der Bodentyp und weitere",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenkunde?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bodenkunde_profil",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "inspire-hh-boden12",
    title: "INSPIRE HH Boden",
    description: "Dieser Datensatz stellt Inhalte der Datensätze \"Bodenformengesellschaften Hamburg\" und \"Bodenkunde-Horizonte\" im INSPIRE-Zielmodell (Thema Boden) dar.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Boden?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-verkehrsnetze-alkis15",
    title: "INSPIRE HH Verkehrsnetze ALKIS",
    description: "Mit diesem Datensatz werden die Hamburger Verkehrsnetze (Straße, Schiene, Luft und Wasser) aus ALKIS, transformiert in das INSPIRE-Zielmodell bereitgestellt. Basis für ALKIS® ist ein von der Arbeitsg",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Verkehrsnetze_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["verkehr", "wasser"]
  },
  {
    id: "soziale-erhaltungsverordnungen-gebiete-in-hamburg40",
    title: "Soziale Erhaltungsverordnungen - Gebiete in Hamburg",
    description: "Soziale Erhaltungsverordnung nach §172 Abs.1 Satz 1 Nr. 2 BauGB Umwandlungsverordnung nach §172 Abs. 1 Satz 4 BauGB Die Karte zeigt Gebiete einer bestehenden oder in Vorbereitung befindlichen Sozi",
    url: "https://geodienste.hamburg.de/HH_WFS_SozErhVO?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["sozial"]
  },
  {
    id: "moorkartierung-hamburg21",
    title: "Moorkartierung Hamburg",
    description: "Der Datensatz beschreibt die Ergebnisse der Hamburger Moorkartierung aus dem Jahr 2016. Es werden die Verbreitung von Torfvorkommen und Mooren im Hamburger Raum in einer Karte dargestellt und die Mäch",
    url: "https://geodienste.hamburg.de/HH_WFS_Moorkartierung?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "inspire-hh-bewirtschaftungsgebiete-schutzgebiete-geregelte-gebiete-und-berichterstattungseinhei13",
    title: "INSPIRE HH Bewirtschaftungsgebiete / Schutzgebiete / geregelte Gebiete und Berichterstattungseinheiten",
    description: "Dieser Datensatz stellt Inhalte zum Thema \"Bewirtschaftungsgebiete / Schutzgebiete / geregelte Gebiete und Berichterstattungseinheiten\" aus folgenden Quelldatensätzen im INSPIRE Zielmodell dar: -...",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Bewirt_Schutz_ger_Geb_Bericht?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-produktions-und-industrieanlagen14",
    title: "INSPIRE HH Produktions- und Industrieanlagen",
    description: "Es werden die Inhalte vom INSPIRE Thema \"Produktions- und Industrieanlagen\" der 2 Datensätze \"Standorte von Windkraftanlagen in Hamburg\" und \"Genehmigungsbedürftige Anlagen nach Bundes-Immissi...",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Produktions_und_Industrieanlagen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "bodenkunde-horizonte23",
    title: "Bodenkunde-Horizonte",
    description: "Bodenhorizonte sind Bereiche innerhalb des Bodens, die einheitlich ähnliche Merkmale und Eigenschaften besitzen und sich von darüberliegenden oder darunterfolgenden Bereichen unterscheiden. Die Geo",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenkunde?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bodenkunde_horizont",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "bodenkuehlleistungskarte-hamburg13",
    title: "Bodenkühlleistungskarte Hamburg",
    description: "Bodenkühlleistungskarte Stand 2021 Die Karte zeigt die Kühlleistung des Bodens in den Sommermonaten, unterteilt in drei Klassen. Die Bodenkühlleistungskarte ist ein Baustein für die Hitzevorsorge",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenkuehlleistungskarte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:grenze_geest_marsch",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "positivnetz-lang-lkw-hamburg22",
    title: "Positivnetz Lang-LKW Hamburg",
    description: "Der Datensatz beinhaltet den Teil des Hamburger Straßennetzes, der für die Befahrung mit Lang-Lkw freigegeben ist (Positivnetz). In Hamburg beschränkt sich dieses Straßennetz auf die Bundesautobahne",
    url: "https://geodienste.hamburg.de/HH_WFS_Positivnetz_Feldversuch_LangLKW?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:lang_lkw",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "inspire-hh-verkehrsnetze-atkis-basis-dlm15",
    title: "INSPIRE HH Verkehrsnetze ATKIS Basis-DLM",
    description: "In diesem Datensatz sind die Hamburger Verkehrsnetze: Straße, Schiene, Luft und Wasser aus dem ATKIS Basis-DLM Quellmodell enthalten und im INSPIRE-Zielmodell dargestellt. ATKIS® steht für Amtliches",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Verkehrsnetze_ATKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["verkehr", "wasser"]
  },
  {
    id: "inspire-hh-bodennutzung17",
    title: "INSPIRE HH Bodennutzung",
    description: "Dieser Datensatz stellt die digitalen Planungsdaten der Bebauungspläne der Freien und Hansestadt Hamburg im INSPIRE Zielmodell dar. Die Daten wurden aus dem XPlanung Objektmodell ins Planned Land U",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Planned_Land_Use?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "wald-in-hamburg15",
    title: "Wald in Hamburg",
    description: "Im Themengebiet \"Wald in Hamburg\" werden flächenhafte Informationen über verschiedene Aspekte der Beschaffenheit der Wälder in Hamburg wiedergegeben. Dargestellt sind 1. die mit Bäumen bestan",
    url: "https://geodienste.hamburg.de/HH_WFS_Wald_in_Hamburg?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bannwald_heuckenlock",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "inspire-hh-geografische-bezeichnungen15",
    title: "INSPIRE HH Geografische Bezeichnungen",
    description: "Dieser Datensatz stellt alle geografischen Bezeichnungen von Hamburg im INSPIRE-Zielmodell dar, die NICHT aus ALKIS oder ATKIS abgeleitet werden (denn dafür liegen separate Datensätze im INSPIRE-Zielm",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_GN?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-geografische-bezeichnungen-alkis16",
    title: "INSPIRE HH Geografische Bezeichnungen ALKIS",
    description: "Dieser Datensatz stellt die geografischen Bezeichnungen von Hamburg aus dem ALKIS Quellmodell im INSPIRE-Zielmodell dar. Basis für ALKIS® ist ein von der Arbeitsgemeinschaft der Vermessungsverwaltung",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_GN_ALKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-hydro-physische-gewaesser-gewaesserbauwerke10",
    title: "INSPIRE HH Hydro-Physische Gewässer Gewässerbauwerke",
    description: "Der Datensatz enthält die Bauwerke in und an Gewässern der Freien und Hansestadt Hamburg im INSPIRE Zielmodell.",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Hydro_Physische_Gewaesser_BUE?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "waldfunktionen-auswahl-hamburg13",
    title: "Waldfunktionen (Auswahl) Hamburg",
    description: "Im Themengebiet \"Waldfunktionen\" werden flächenhafte Informationen über ausgewählte Funktionen der Waldflächen in Hamburg dargestellt. Der Wald trägt in besonderem Maß zum Schutz der natürlichen L",
    url: "https://geodienste.hamburg.de/HH_WFS_Waldfunktionen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:waldfunktionen_bodenschutz",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "verbreitung-der-tiere-hamburgs13",
    title: "Verbreitung der Tiere Hamburgs",
    description: "Das Artenkataster enthält alle Fundortdaten zu Tierarten aus beauftragten Kartierungen und von ehrenamtlich Tätigen, die der Behörde für Umwelt, Klima, Energie und Agrarwirtschaft, Abteilung Naturschu",
    url: "https://geodienste.hamburg.de/HH_WFS_verbreitung_tiere?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:verbreitung_tiere",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["umwelt", "klima", "energie"]
  },
  {
    id: "freizeitrouten-und-radfernwege-hamburg12",
    title: "Freizeitrouten und Radfernwege Hamburg",
    description: "Der Datensatz enthält das Netz der 14 Freizeitrouten für das Radwandern (ca. 440km) sowie der 5 Radfernwege, die durch Hamburg verlaufen. Die Freizeitrouten erschließen die Grün- und Landschaftsbere",
    url: "https://geodienste.hamburg.de/HH_WFS_Freizeitrouten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:freizeitroute1",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["rad", "grün"]
  },
  {
    id: "inspire-hh-statistische-einheiten17",
    title: "INSPIRE HH Statistische Einheiten",
    description: "Dieser Datensatz beinhaltet die Statischen Einheiten vom Statistikamt Nord im INSPIRE Zielmodell. Die Einteilung Hamburgs in jetzt 943 Statistische Einheiten (Stand: April 2016) erfolgte im Anschl",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Statistical_Units?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "strassenbaumkataster-hamburg30",
    title: "Straßenbaumkataster Hamburg",
    description: "Das Straßenbaumkataster umfasst die flächendeckende Darstellung der Bäume auf öffentlichen Straßenflurstücken als Grundlage der Baumkontrollen zur Verkehrssicherheit und der Planung. Wesentliche Daten",
    url: "https://geodienste.hamburg.de/HH_WFS_Strassenbaumkataster?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:strassenbaumkataster",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["baum", "verkehr"]
  },
  {
    id: "elektro-ladestandorte-hamburg38",
    title: "Elektro Ladestandorte Hamburg",
    description: "Der Datensatz enthält die Standorte der öffentlich zugänglichen Ladeeinrichtungen für Elektrofahrzeuge in der Modellregion Elektromobilität Hamburg. Die zugehörigen Sachinformationen wie z.B. Anzahl d",
    url: "https://geodienste.hamburg.de/HH_WFS_EMobility?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: []
  },
  {
    id: "hamburger-mietenspiegel31",
    title: "Hamburger Mietenspiegel",
    description: "Der Hamburger Mietenspiegel erscheint seit 1976 alle zwei Jahre. Er gibt einen Überblick über die ortsübliche Vergleichsmiete für frei finanzierte Wohnungen jeweils vergleichbarer Art, Größe, Ausstatt",
    url: "https://geodienste.hamburg.de/HH_WFS_Mietenspiegel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "inspire-hh-hydro-physische-gewaesser-atkis-basis-dlm10",
    title: "INSPIRE HH Hydro-Physische Gewässer ATKIS Basis-DLM",
    description: "Der Datensatz enthält die Binnengewässer für Hamburg abgeleitet aus dem Quelldatenbestand ATKIS Basis-DLM. ATKIS® steht für Amtliches Topographisch-Kartographisches Informationssystem und ist als Gem",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Hydro_Physische_Gewaesser_ATKIS?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "inspire-hh-schutzgebiete19",
    title: "INSPIRE HH Schutzgebiete",
    description: "Der INSPIRE Datensatz Schutzgebiete (PS) Hamburg setzt sich aus den Inhalten folgender Datensätze zusammen: Schutzgebietskataster Hamburg Natur- und Landschaftsschutzgebiete, Naturdenkmale; Vero",
    url: "https://geodienste.hamburg.de/HH_WFS_INSPIRE_Schutzgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "parkanlagen29",
    title: "Parkanlagen",
    description: "Ausgewählte Hamburger Parkanlagen sind mit Foto und Kurzinfos verknüpft sowie mit einem Link auf eine Hintergrundseite auf hamburg.de, auf der der Park (Lage, Gestaltung, Besonderheiten, Bildergalerie",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenflaechen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:gruenflaechen_parkanlagen",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["park"]
  },
  {
    id: "abfall-und-recycling-hamburg23",
    title: "Abfall und Recycling Hamburg",
    description: "Depotcontainerstandplätze Depotcontainerstandplätze sind Einrichtungen zur sortenreinen Erfassung von Altpapier, Altglas (braun, grün, weiß), Leichtverpackungen (z. B. Kunststoffe und Metalle) sowie",
    url: "https://geodienste.hamburg.de/HH_WFS_abfall_recycling?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["cycling", "grün"]
  },
  {
    id: "spielplaetze13",
    title: "Spielplätze",
    description: "Ausgewählte Hamburger Spielplätze sind mit Foto und Kurzinfos verknüpft sowie einem Link auf eine Hintergrundseite auf hamburg.de, auf der der Spielplatz (Lage, Angebote, Besonderheiten, Bildergalerie",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenflaechen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:gruenflaechen_spielplaetze",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "radverkehrsnetz-hamburg11",
    title: "Radverkehrsnetz Hamburg",
    description: "Der Datensatz enthält die Radverkehrsanlagen der Freien und Hansestadt Hamburg. Da es sich um einen routingfähigen Datensatz handelt, werden nicht nur klassische Radverkehrsanlagen (Radweg, Radfah",
    url: "https://geodienste.hamburg.de/HH_WFS_Radverkehrsnetz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:radwege_radweg",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "feinkartierung-strasse-hamburg23",
    title: "Feinkartierung Straße Hamburg",
    description: "Der Datensatz enthält Informationen zu Nutzung und Oberflächenmaterial der einzelnen Objekte im Straßenraum der Bezirks- und Hauptverkehrsstraßen. In der Regel sind im Datensatz alle Objekte im Berei",
    url: "https://geodienste.hamburg.de/HH_WFS_Feinkartierung_Strasse?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "bezirksradrouten-hamburg-nord-finales-zielnetz2",
    title: "Bezirksradrouten Hamburg-Nord (Finales Zielnetz)",
    description: "Der Datensatz enthält das Netz der Bezirksradrouten für den Alltagsradverkehr im Hamburger Bezirk Nord. Die Bezirksradrouten verbinden wichtige Ziele innerhalb der Bezirke und Stadtteile und sind eine",
    url: "https://geodienste.hamburg.de/HH_WFS_Bezirksradrouten_Hamburg_Nord?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "bohrarchiv35",
    title: "Bohrarchiv",
    description: "Es handelt sich hierbei um eine georeferenzierte Datensammlung (Datenbank) mit den freigegebenen geowissenschaftlichen Bohr- und Profildaten aus den geologischen Schichtenverzeichnissen. Grundlage der",
    url: "https://geodienste.hamburg.de/HH_WFS_BoreholeML3-Header?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "stadtrad-stationen-hamburg35",
    title: "StadtRAD-Stationen Hamburg",
    description: "Der Datensatz enthält die Position aller StadtRAD-Stationen im Hamburger Stadtgebiet und die Anzahl der aktuell zur Ausleihe zur Verfügung stehenden Fahrräder und Lastenpedelecs. Weitere Information",
    url: "https://geodienste.hamburg.de/HH_WFS_Stadtrad?service=WFS&request=DescribeFeatureType&version=2.0.0&typename=de.hh.up:stadtrad_stationen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad"]
  },
  {
    id: "angebote-und-nutzung-der-offenen-kinder-und-jugendarbeit-hamburg16",
    title: "Angebote und Nutzung der Offenen Kinder- und Jugendarbeit Hamburg",
    description: "Es werden an dieser Stelle die Datensätze der Bezirke im Bereich \"Außerschulische Bildung im Kindes- und Jugendalter - Offene Kinder- und Jugendarbeit\" beschrieben. Standorte der Einrichtungen de...",
    url: "https://geodienste.hamburg.de/HH_WFS_OKJA?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["bildung", "kinder"]
  },
  {
    id: "velorouten-hamburg13",
    title: "Velorouten Hamburg",
    description: "Der Datensatz ist veraltet und enthält das bis 2024 geltende Netz der 14 Velorouten für den Alltagsradverkehr in Hamburg. Das Netz der Velorouten ging 2025 gemeinsam mit den Bezirksradrouten und den",
    url: "https://geodienste.hamburg.de/HH_WFS_Velorouten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:veloroute1",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "landschaftsprogramm-freiraumverbund-hamburg147",
    title: "Landschaftsprogramm / Freiraumverbund Hamburg",
    description: "Die Karte \"Landschaftsprogramm Hamburg / Freiraumverbund\" ist Bestandteil des Landschaftsprogramms. Hinweis: Das \"Freiraumverbundsystem des Landschaftsprogramms\" wird aus dem Datenbestand des aktu",
    url: "https://geodienste.hamburg.de/HH_WFS_Landschaftsprogramm_Freiraumverbund?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund18",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:lapro_disk_d061_orte_anno_m_50000",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund17",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=Gruenes_Netz:Bahnlinien_Personen_Gueterverkehr_G314",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund16",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=Gruenes_Netz:Bahnlinien_Personen_Gueterverkehr_G314",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund15",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund14",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund13",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund9",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "grunes-netz-hamburg-freiraumverbund8",
    title: "Grünes Netz Hamburg / Freiraumverbund",
    description: "Die Karte \"Grünes Netz Hamburg / Freiraumverbund\" ist Teil des Landschaftsprogramms (Landschaftsprogramm Hamburg) Sie beschreibt die wesentlichen Entwicklungsziele für die Stadt-Landschaft Hamburgs:",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenes_Netz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: ["grün"]
  },
  {
    id: "hamburger-luftmessnetz-halm3",
    title: "Hamburger Luftmessnetz (HaLm)",
    description: "Das Hamburger Luftmessnetz (HaLm) * betreibt 15 Messstationen zur Überwachung der Luftqualität * unterscheidet zwischen Hintergrund-, Ozon- und Verkehrs-Messstationen * misst kontinuierlich gemäß EU-",
    url: "https://geodienste.hamburg.de/HH_WFS_Luftmessnetz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Gesundheit und Verbraucherschutz, Amt für Verbraucherschutz, Institut für Hygiene und Umwelt",
    keywords: ["verkehr"]
  },
  {
    id: "ruheinseln-hamburg12",
    title: "Ruheinseln Hamburg",
    description: "Ruheinseln - Diese Flächen sind keine Ruhigen Gebiete im Sinne der EU-Umgebungslärmrichtlinie und des §47d BImSchG. Da jedoch auch kleinere Flächen von der Bevölkerung genutzt werden um „Ruhe zu finde",
    url: "https://geodienste.hamburg.de/HH_WFS_Ruheinseln?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg-anderungsuebersicht7",
    title: "Landschaftsprogramm Hamburg - Änderungsübersicht",
    description: "\"Landschaftsprogramm Hamburg - Änderungsübersicht\" zeigt alle Bereiche, in denen seit der Bekanntmachung des Plans im Juli 1997 Änderungen festgestellt wurden, bzw. Berichtigungen gemäß §5 Absatz...",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro_Aend?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg165",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-168. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg16",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-145. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:lapro_disk_ergaenzung_der_lgv_texte",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg15",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-145. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg14",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-142. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg13",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-142. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg12",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-142. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: []
  },
  {
    id: "landschaftsprogramm-hamburg8",
    title: "Landschaftsprogramm Hamburg",
    description: "Bezugsmaßstab für die Darstellungen des Landschaftsprogramms: 1:20.000 Aktualität des Datenbestandes: Landschaftsprogramm Hamburg in der Fassung vom Juli 1997, einschließlich der 1.-140. Änderung,",
    url: "https://geodienste.hamburg.de/HH_WFS_LaPro?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE)",
    keywords: []
  },
  {
    id: "laermkarten-hamburg-47c-blmschg15",
    title: "Lärmkarten Hamburg (§47c BlmSchG)",
    description: "- Berechnungen und Kartierung nach Umgebungslärmrichtlinie und nach 34. BImSchV für den Ballungsraum Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Strassenverkehr?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "ruhige-gebiete-hamburg-47d-bimschg13",
    title: "Ruhige Gebiete Hamburg (§ 47d BImSchG)",
    description: "Ruhige Gebiete (§ 47d BImSchG) - Abwägungsrelevant bei Bauleitverfahren nach Baugesetzbuch und Planverfahren nach sonstigem Planrecht - Allgemein zugängliche Flächen mit einer geringen Lärmbelastung -",
    url: "https://geodienste.hamburg.de/HH_WFS_Ruhige_Gebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "online-beantragung-luftfahrthindernisse-hamburg16",
    title: "Online Beantragung Luftfahrthindernisse Hamburg",
    description: "Darstellung Hinderniserfassungsbereich sowie Bauschutzbereich als Grundlage für den Online-Dienst \"Kräne\". Grundlage für die Darstellung sind der Bauschutzbereich des Verkehrsflughafens Hamburg-A...",
    url: "https://geodienste.hamburg.de/HH_WFS_Luftfahrthindernisse?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: ["verkehr", "hafen"]
  },
  {
    id: "wrrl-grundlagendaten-hamburg8",
    title: "WRRL Grundlagendaten Hamburg",
    description: "Es werden Grundlagendaten für die Bewertung der Wasserkörper nach EG-Wasserrahmenrichtlinie (EG-WRRL) bereitgestellt. Die folgenden bereitgestellten Fachdaten sind über diese Kartenanwendung zugängli",
    url: "https://geodienste.hamburg.de/HH_WFS_WRRL_Grundlagendaten?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "hamburger-ausbildungsbetriebe-in-der-vermessungstechnik14",
    title: "Hamburger Ausbildungsbetriebe in der Vermessungstechnik",
    description: "Die Übersicht Hamburger Ausbildungsbetriebe in der Vermessungstechnik visualisiert die Vermessungs- und Ingenieurbüros Hamburgs, die eine Ausbildung im Bereich Vermessungstechnik anbieten. Erleichtert",
    url: "https://geodienste.hamburg.de/HH_WFS_Ausbildungsbetriebe_Vermessung?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ausbildungsbetriebe_vermessung",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["bildung"]
  },
  {
    id: "wasserrahmenrichtlinie-daten-zum-3-bewirtschaftungszyklus-hamburg8",
    title: "Wasserrahmenrichtlinie Daten zum 3. Bewirtschaftungszyklus Hamburg",
    description: "Gemäß Europäischer Wasserrahmenrichtlinie (EG-WRRL) wurden die Daten, die dem 2. Bewirtschaftungsplan (2016-2021) zugrunde liegen, für den 3. Bewirtschaftungsplan (2022-2027) überprüft und aktualisier",
    url: "https://geodienste.hamburg.de/HH_WFS_WRRL_3_BWZ?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "wasserrahmenrichtlinie-daten-zum-2-bewirtschaftungszyklus-hamburg9",
    title: "Wasserrahmenrichtlinie Daten zum 2. Bewirtschaftungszyklus Hamburg",
    description: "Gemäß Europäischer Wasserrahmenrichtlinie (EG-WRRL) wurden die Daten, die dem 1. Bewirtschaftungsplan (2010-2015) zugrunde liegen, für den 2. Bewirtschaftungsplan (2016-2021) überprüft und aktualisier",
    url: "https://geodienste.hamburg.de/HH_WFS_WRRL_2_BWZ?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "wasserrahmenrichtlinie-daten-zum-1-bewirtschaftungszyklus-hamburg9",
    title: "Wasserrahmenrichtlinie Daten zum 1. Bewirtschaftungszyklus Hamburg",
    description: "Gemäß Europäischer Wasserrahmenrichtlinie (EG-WRRL) werden für alle berichtspflichtigen Gewässer Zustandsdaten erhoben und Maßnahmen umgesetzt um den Zustand der Gewässer (oder das Potenzial bei künst",
    url: "https://geodienste.hamburg.de/HH_WFS_WRRL_1_BWZ?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "geodaten-zu-wahlen-von-hamburg5",
    title: "Geodaten zu Wahlen von Hamburg",
    description: "Die Hamburger Bundestags- Bürgerschafts- und Bezirksversammlungswahlkreise sind räumlich abgegrenzte Teile des Wahlgebietes der Freie und Hansestadt Hamburg, in denen die Wahlberechtigten jeweils ein",
    url: "https://geodienste.hamburg.de/HH_WFS_Wahlen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "dynamisches-koordinierungsnetz-hamburg13",
    title: "Dynamisches Koordinierungsnetz Hamburg",
    description: "Der Datensatz enthält das Dynamische Koordinierungsnetz der Stadt Hamburg für die Baustellenkoordinierung. Dieses enthält alle Straßen, die bei der Koordinierung von Straßenbaustellen berücksichtigt w",
    url: "https://geodienste.hamburg.de/HH_WFS_Dynamisches_Koordinierungsnetz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dynamisches_koordinierungsnetz",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "sozialmonitoring-integrierte-stadtteilentwicklung-hamburg-karte-gesamtindex18",
    title: "Sozialmonitoring Integrierte Stadtteilentwicklung Hamburg - Karte Gesamtindex",
    description: "Mit dem Sozialmonitoring in der Integrierten Stadtteilentwicklung verfügt Hamburg seit 2010 über ein System der kleinräumigen Stadtbeobachtung. Ziel ist es, frühzeitig erkennbar zu machen, in welchen",
    url: "https://geodienste.hamburg.de/wfs_sozialmonitoring?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["sozial"]
  },
  {
    id: "kommunale-waermeplanung-hamburg-eignungspruefung",
    title: "Kommunale Wärmeplanung Hamburg - Eignungsprüfung",
    description: "Dieser Datensatz ist das Ergebnis der Eignungsprüfung und verkürzten Wärmeplanung nach §14 Wärmeplanungsgesetz. Es wurde analysiert welche Teilgebiete mit hoher Wahrscheinlichkeit nicht für eine Verso",
    url: "https://geodienste.hamburg.de/wfs_kommunale_waermeplanung?Service=WFS&Version=2.0.0&Request=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "rabatt-kampagne-kehr-wieder-becher8",
    title: "Rabatt-Kampagne KEHR.WIEDER-Becher",
    description: "Mit der hamburgweiten Kampagne soll ein erster Schritt eingeleitet werden, den Verbrauch von Einwegbechern zu reduzieren. Im Vordergrund steht eine öffentlichkeitswirksame Kampagne zur Gewährung eines",
    url: "https://geodienste.hamburg.de/HH_WFS_KehrwiederBecher?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "einfach-mehrweg-hamburg10",
    title: "Einfach Mehrweg Hamburg",
    description: "Beim Übergang zu mehr Mehrweg für Essen to go gibt es einige Optionen. Neben der Anschaffung eigener Behältnisse durch Gastronom:innen und Kund:innen etablieren sich zunehmend Anbieter:innen von Mehrw",
    url: "https://geodienste.hamburg.de/HH_WFS_Einfach_Mehrweg?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "refill-station-hamburg2",
    title: "Refill Station Hamburg",
    description: "Refill-Stationen sind ein Netzwerk von bundesweiten Einrichtungen, in denen mitgebrachte Trinkgefäße kostenlos mit Leitungswasser befüllt werden können. Sie sind durch den digitalen Karteneintrag sel",
    url: "https://geodienste.hamburg.de/wfs_refill_station_hamburg?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["wasser"]
  },
  {
    id: "beratungsstellen-und-gruppenangebote-fuer-senior-innen-der-queeren-community-eimsbuettel-hambur1",
    title: "Beratungsstellen und Gruppenangebote für Senior:innen der queeren Community Eimsbüttel Hamburg",
    description: "Der Datensatz beinhaltet Beratungsstellen und Gruppenangebote für Senior:innen der queeren Community.",
    url: "https://geodienste.hamburg.de/WFS_Beratung_Senior_queeren_Community_Eimsbuettel?Service=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "bebauungsplaene-hamburg13",
    title: "Bebauungspläne Hamburg",
    description: "Bebauungspläne (Verbindliche Bauleitpläne) sind rechtsverbindliche Pläne, zu denen Baustufenpläne, Teilbebauungspläne, Durchführungspläne und seit 1962 die heutigen Bebauungspläne nach dem Bundesbauge",
    url: "https://geodienste.hamburg.de/HH_WFS_Bebauungsplaene?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:hh_hh_festgestellt",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "masterportal-community19",
    title: "Masterportal Community",
    description: "Darstellung und Beschreibung der Nachnutzer des Masterportals, insbesondere im Rahmen der Implementierungspartnerschaft Masterportal.",
    url: "https://geodienste.hamburg.de/HH_WFS_Masterportal_Community?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:flaechenlaender_ip",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["port"]
  },
  {
    id: "werbeanlagen-hamburg16",
    title: "Werbeanlagen Hamburg",
    description: "Der Datensatz enthält die Standorte der Werbeanlagen der Hauptwerbeträger in Hamburg (DSM Werbetr. GmbH & Co.KG und Wall GmbH sowie Anlagen von anderen Anbietern). Die Darstellung der Layer basiert au",
    url: "https://geodienste.hamburg.de/HH_WFS_Werbeanlagen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "priobike-hamburg6",
    title: "PrioBike Hamburg",
    description: "Der Datensatz enthält die Infrastrukturdaten zum PrioBike-Projekt. Grüne Welle Der bisherige Fokus auf die Priorisierung des motorisierten Individualverkehrs wird aufgebrochen und um den nichtmotoris",
    url: "https://geodienste.hamburg.de/wfs_priobike?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bike", "grün", "verkehr"]
  },
  {
    id: "stadtklimaanalyse-hamburg-20235",
    title: "Stadtklimaanalyse Hamburg 2023",
    description: "Die Stadtklimaanalyse Hamburg 2023 basiert auf einer modellgestützten Analyse zu den klimaökologischen Funktionen für das Hamburger Stadtgebiet. Die Berechnung mit FITNAH 3D erfolgte in einer hohen rä",
    url: "https://geodienste.hamburg.de/wfs_stadtklimaanalyse_hamburg_2023?Service=WFS&Request=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["klima"]
  },
  {
    id: "hecken-der-gruenunterhaltung-hamburg-mitte1",
    title: "Hecken - der Grünunterhaltung Hamburg-Mitte",
    description: "In diesem Dienst werden die zu pflegenden Hecken des Bezirks Hamburg-Mitte in den Grünanlagen und im Straßenbegleitgrün, die in der Zuständigkeit der Abteilung Stadtgrün liegen, angezeigt. Hierbei han",
    url: "https://geodienste.hamburg.de/wfs_hecken_mitte?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Bezirksämter",
    keywords: ["grün"]
  },
  {
    id: "taxenstaende-hamburg12",
    title: "Taxenstände Hamburg",
    description: "Der Datensatz enthält alle Taxenstände und E-Taxenstände innerhalb Hamburgs. Hierbei ist es unerheblich ob sich diese auf öffentlichem oder privatem Grund befinden. Allerdings ist zu beachten, dass",
    url: "https://geodienste.hamburg.de/HH_WFS_Taxenstaende?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: []
  },
  {
    id: "gewaesserzustaendigkeiten-hamburg7",
    title: "Gewässerzuständigkeiten Hamburg",
    description: "Die Gewässerzuständigkeiten enthält als WMS-Darstellungsdienst und WFS-Downloaddienst die Zuständigkeiten der Wasserbehörden für Oberflächengewässer. Es werden verschiedene Grenzen und Zuständigkeite",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_Gewaesserzustaendigkeiten?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "wasserbuch-hamburg1",
    title: "Wasserbuch Hamburg",
    description: "Für die Gewässer sind Wasserbücher zu führen. In das jeweilige Wasserbuch sind nach § 87 des Wasserhaushaltsgesetzes (WHG) in Verbindung mit § 98 ff. des Hamburgischen Wassergesetzes (HWaG) insbesonde",
    url: "https://geodienste.hamburg.de/wfs_wasserbuch_hamburg?Service=WFS&Request=getCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "motorradstellplaetze-hamburg17",
    title: "Motorradstellplätze Hamburg",
    description: "Der Datensatz enthält die Lage der Motorradstellplätze im Hamburger Stadtgebiet. In der Regel sind die Plätze in der Örtlichkeit markiert und auch beschildert. Die Daten werden anhand von straßenverk",
    url: "https://geodienste.hamburg.de/wfs_motorradstellplaetze?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad"]
  },
  {
    id: "verkehrskameras-hamburg33",
    title: "Verkehrskameras Hamburg",
    description: "Der Datensatz enthält eine Auswahl von Verkehrskameras der Hamburger Verkehrsleitzentrale. Zur Verfügung gestellt werden die Standorte der Kameras sowie die dazugehörigen Kamerabilder im Livestream.",
    url: "https://geodienste.hamburg.de/wfs_verkehrskameras?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "parkhaeuser-hamburg15",
    title: "Parkhäuser Hamburg",
    description: "Der Datensatz enthält die Standorte von Parkhäusern, Tiefgaragen und Parkplätzen im Hamburger Stadtgebiet mit Informationen über Öffnungszeiten, Preise, Anzahl der Stellplätze, Einfahrtshöhen sowie te",
    url: "https://geodienste.hamburg.de/wfs_parkhaeuser?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["park"]
  },
  {
    id: "verkehrslage-auf-autobahnen-schleifen-hamburg33",
    title: "Verkehrslage auf Autobahnen (Schleifen) Hamburg",
    description: "Der Datensatz wird von der Freien und Hansestadt Hamburg nicht mehr gepflegt. Für entsprechende Daten ist die Autobahn GmbH zuständig. Alternativ kann auch der von der FHH veröffentlichte Datensatz",
    url: "https://geodienste.hamburg.de/wfs_verkehrslage_autobahnen_schleifen?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr", "bahn"]
  },
  {
    id: "reisebusparkplaetze-hamburg17",
    title: "Reisebusparkplätze Hamburg",
    description: "Der Datensatz enthält die Lage der Reisebusparkplätze im Hamburger Stadtgebiet. In der Regel sind die Plätze in der Örtlichkeit markiert und auch beschildert. Die Daten werden anhand von straßenverke",
    url: "https://geodienste.hamburg.de/wfs_reisebusparkplaetze?Service=WFS&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["park"]
  },
  {
    id: "behindertenstellplaetze-hamburg16",
    title: "Behindertenstellplätze Hamburg",
    description: "Der Datensatz enthält die Lage der Behindertenstellplätze im Hamburger Stadtgebiet. Es werden ausschließlich öffentliche Stellplätze ohne personenbezogene Daten ausgewiesen. In der Regel sind die Plät",
    url: "https://geodienste.hamburg.de/wfs_behindertenstellplaetze?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "fahrradluftstationen-hamburg14",
    title: "Fahrradluftstationen Hamburg",
    description: "Der Datensatz enthält die Standorte öffentlicher Luftpumpen für Fahrräder in Hamburg. An Standorten, die an öffentliche Toilettenanlagen angegliedert sind, gibt es zusätzlich auch Lademöglichkeiten f",
    url: "https://geodienste.hamburg.de/HH_WFS_Fahrradluftstationen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:fahrradluftstationen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "fahrrad"]
  },
  {
    id: "strassenbegleitgruen-maehflaechen-der-gruenunterhaltung-hamburg-mitte2",
    title: "Straßenbegleitgrün - Mähflächen der Grünunterhaltung Hamburg-Mitte",
    description: "In diesem Dienst werden die zu mähenden Flächen des Straßenbegleitgrünes, die in der Zuständigkeit der Abteilung Stadtgrün liegen, angezeigt. Hierbei handelt es sich um georeferenzierte Polygone, welc",
    url: "https://geodienste.hamburg.de/wfs_strassenbegleitgruen_ba_m?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["grün"]
  },
  {
    id: "denkmalkartierung-baudenkmale-hamburg1",
    title: "Denkmalkartierung Baudenkmale Hamburg",
    description: "Die Denkmalkartierung ist Bestandteil des Denkmalinformationssystems Hamburg. Die kartierten Objekte sind über die Objektnummer mit den Sachdaten verbunden, so dass ausgewählte Informationen über die",
    url: "https://geodienste.hamburg.de/HH_WFS_Denkmalschutz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Kulturbehörde",
    keywords: []
  },
  {
    id: "plaetze13",
    title: "Plätze",
    description: "Ausgewählte Hamburger Plätze sind mit Foto und Kurzinfos verknüpft sowie mit einem Link auf eine Hintergrundseite auf hamburg.de, auf der der Platz (Lage, Architektur, Besonderheiten, Bildergalerie et",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruenflaechen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:plaetze",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "wettbewerbe-hamburg1",
    title: "Wettbewerbe Hamburg",
    description: "Architektur-, Städtebau- und landschaftsplanerische Wettbewerbe sind ein wichtiges Instrument, um Ideen für eine lebenswerte Stadt zu generieren und dann auch umzusetzen. Wettbewerbe sind das geeignet",
    url: "https://geodienste.hamburg.de/wfs_wettbewerbe?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "wasserrechte-fuer-grundwasser-und-oberflaechengewaesser-hamburg13",
    title: "Wasserrechte für Grundwasser und Oberflächengewässer Hamburg",
    description: "Achtung: Dieser Datensatz ist veraltet und wird seit #02.2025# nicht mehr aktualisiert. Gemäß Hamburger Transparenzgesetz wird er für 10 Jahre vorgehalten und im Anschluss gelöscht. Die Daten sind zu",
    url: "https://geodienste.hamburg.de/HH_WFS_Wasserbuch?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "100-jahre-stadtgruen-stadtpark-und-volkspark14",
    title: "100 Jahre Stadtgrün - Stadtpark und Volkspark",
    description: "Anlässlich des 100. Geburtstags vom Hamburger Stadtpark und Altonaer Volkspark werden für beide Parks Informationen zu Service-Einrichtungen und Sehenswürdigkeiten im Park dargeboten. Dazu zählen zum",
    url: "https://geodienste.hamburg.de/HH_WFS_Stadtgruen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["park", "grün"]
  },
  {
    id: "freiraumprojekte-innenstadt-hamburg",
    title: "Freiraumprojekte Innenstadt Hamburg",
    description: "Der Datensatz zeigt Freiraumprojekte in der Hamburger Innenstadt. Diese werden im Rahmen des Handlungskonzepts Innenstadt „Eine attraktive Innenstadt für alle“ sukzessive umgesetzt und dienen der Stei",
    url: "https://geodienste.hamburg.de/wfs_freiraumprojekte_innenstadt?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "verborgene-potenziale-innenstadt-hamburg",
    title: "Verborgene Potenziale Innenstadt Hamburg",
    description: "Der Datensatz enthält Informationen zu Projekten und Maßnahmen, die im Rahmen des Programmpakets „Verborgene Potenziale – Für ein lebendiges und resilientes Hamburger Zentrum“ der Behörde für Stadtent",
    url: "https://geodienste.hamburg.de/wfs_verborgene_potenziale_innenstadt?SERVICE=wfs&REQUEST=getCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "denkmalkartierung-bodendenkmale-hamburg1",
    title: "Denkmalkartierung Bodendenkmale Hamburg",
    description: "Kartierung von Bodendenkmälern und weiteren Archäologieflächen auf dem Gebiet der FHH; Die dargestellten Objekte sind teilweise oder zur Gänze lediglich untertägig erhalten. Ihre vollständige Ausdehnu",
    url: "https://geodienste.hamburg.de/HH_WFS_Denkmal_public?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Archäologisches Museum Hamburg",
    keywords: []
  },
  {
    id: "postleitzahlen-hamburg2",
    title: "Postleitzahlen Hamburg",
    description: "Die Postleitzahlengebiete- und deren Grenzen werden im Kartendienst \"Postleitzahlen Hamburg\" in Magenta dargestellt. Grundlage sind die ALKIS Daten des 3A-Verfahrens. Auf dieser geometrischen Basis",
    url: "https://geodienste.hamburg.de/HH_WFS_Postleitzahlen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "mrh-industriekultur12",
    title: "MRH Industriekultur",
    description: "Denkmäler und Museen mit Informationen zur Industriegeschichte der Metropolregion werden über diese Inhalte dargestellt. Dem technikinteressiertem Publikum stehen an diesen Standorten unterschiedliche",
    url: "https://geodienste.hamburg.de/MRH_WFS_Industriekultur?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:mrh_industriekultur",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: []
  },
  {
    id: "winterdienst-fuer-den-radverkehr-durch-srh-hamburg11",
    title: "Winterdienst für den Radverkehr durch SRH Hamburg",
    description: "Die Stadtreinigung Hamburg führt den Winterdienst für den Radverkehr im Rahmen ihrer Leistungsfähigkeit auf einem ausgewählten Streckennetz durch, das durch die Behörde für Verkehr und Mobilitätswende",
    url: "https://geodienste.hamburg.de/HH_WFS_Winterdienst_Radverkehr_SRH?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Stadtreinigung Hamburg",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "waermenetzeignungsgebiete-hamburg3",
    title: "Wärmenetzeignungsgebiete Hamburg",
    description: "Die Karte zeigt, wo im Stadtgebiet der Freien und Hansestadt Hamburg Wärmenetze vorhanden sind und wo sich eine Wärmenetzversorgung unter wirtschaftlichen Gesichtspunkten für den Wärmenetzbetreiber un",
    url: "https://geodienste.hamburg.de/wfs_waermenetzeignungsgebiete?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "beratungsstellen-fuer-wohnungsnotfaelle-hamburg12",
    title: "Beratungsstellen für Wohnungsnotfälle Hamburg",
    description: "Die Fachstellen für Wohnungsnotfälle bieten Unterstützung und Beratung bei drohendem Wohnungsverlust und bei Obdachlosigkeit. Sofern Sie aufgrund von Mietrückständen oder Mietstreitigkeiten von Wohnun",
    url: "https://geodienste.hamburg.de/HH_WFS_Wohnungsnotfaelle?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:wohnungsnotfaelle",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "sozialraeume-hamburg12",
    title: "Sozialräume Hamburg",
    description: "Es werden an dieser Stelle die Datensätze der Bezirksämter zu den Sozialräumen beschrieben. Die Bezirke gliedern sich verwaltungstechnisch in Stadtteile, die im Zuge der Integrierten Sozialplanung (in",
    url: "https://geodienste.hamburg.de/HH_WFS_Sozialraeume?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "poststelle@soziales.hamburg.de",
    keywords: ["sozial"]
  },
  {
    id: "vertrag-fuer-hamburgs-stadtgruen-schutz-und-kompensation11",
    title: "Vertrag für Hamburgs Stadtgrün/Schutz und Kompensation",
    description: "Die Flächenkulisse der Schutz- und Kompensationsregelung für das innerstädtische Grüne Netz wird in der Drucksache 21/16980 vom 24. April 2019 (Einigung mit der Volksinitiative „Hamburgs Grün erhalten",
    url: "https://geodienste.hamburg.de/HH_WFS_Vertrag_Hamburgs_Stadtgruen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["grün"]
  },
  {
    id: "spass-im-und-am-wasser-2-gruener-ring-hamburg11",
    title: "Spass im und am Wasser - 2. Grüner Ring Hamburg",
    description: "Bade- und Freizeitmöglichkeiten auf dem 2. Grünen Ring in Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Spass_im_und_am_Wasser?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:spass_im_und_am_wasser",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["grün", "wasser"]
  },
  {
    id: "wandern-entlang-der-landschaftsachsen-hamburg5",
    title: "Wandern entlang der Landschaftsachsen Hamburg",
    description: "Hamburgs zwölf Landschaftsachsen entdecken: Vielseitig und spannend – so führen die zwölf Landschaftsachsen durch das Grüne Netz Hamburg. Sie folgen Flüssen, verlaufen durch beliebte Parks, kleine Nat",
    url: "https://geodienste.hamburg.de/HH_WFS_Wanderrouten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:gruene_ringe",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["park", "grün"]
  },
  {
    id: "bedeutungsraeume-fuer-den-fussverkehr1",
    title: "Bedeutungsräume für den Fußverkehr",
    description: "Der Datensatz enthält die Bedeutungsräume für den Fußverkehr in Hamburg. Sie sollen die Relevanz von Wegen und Straßen für Zufußgehende visualisieren. Die Daten wurden auf Basis eines Fußwegenetz aus",
    url: "https://geodienste.hamburg.de/wfs_bedeutungsraeume_fussverkehr?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "sp-gebiete-hamburg9",
    title: "SP-Gebiete Hamburg",
    description: "Die SP-Gebiete sind, neben der HafenCity, abgegrenzte größere Stadtgebiete, für die der Senat sich befristet die Zuständigkeit für die Bebauungsplanung und die Bauaufsicht nach § 7 Bauleitplanfeststel",
    url: "https://geodienste.hamburg.de/HH_WFS_SP_Gebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["hafen"]
  },
  {
    id: "waermekataster-energieerzeugungsanlagen-hamburg12",
    title: "Wärmekataster Energieerzeugungsanlagen Hamburg",
    description: "Der Datensatz „Energieerzeugungsanlagen“ des Wärmekatasters gibt eine Übersicht über einen Großteil der in Hamburg installierten Großanlagen zur Bereitstellung von Wärme (und teilweise auch Strom). Da",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Energieerzeugungsanlagen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["energie", "strom"]
  },
  {
    id: "geotourismus-karte-1-60-00027",
    title: "Geotourismus-Karte 1:60 000",
    description: "Geotourismus-Karte 1: 60 000 mit Erläuterungen. Die Geotourismus-Karte 1: 60 000 liegt in analoger Form und digital vor. Veröffentlicht ist sie in analoger Form als Buch mit Karte erschienen. In digit",
    url: "https://geodienste.hamburg.de/HH_WFS_Geotourismus?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "hafenmessfahrten-2013-hamburg19",
    title: "Hafenmessfahrten 2013 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2013 wurden vier Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafenmessfahrten_2013?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ammonium_20130514",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "hafenmessfahrten-2014-hamburg33",
    title: "Hafenmessfahrten 2014 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2014 wurden fünf Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafenmessfahrten_2014?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "iq-projekte-hamburg14",
    title: "IQ Projekte Hamburg",
    description: "Integration durch Qualifizierung (IQ) – das bundesweite Förderprogramm: Das Förderprogramm \"Integration durch Qualifizierung (IQ)\" arbeitet seit 2005 an der Zielsetzung, die Arbeitsmarktchancen f...",
    url: "https://geodienste.hamburg.de/HH_WFS_iq_projekte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "its-dienste-an-lichtsignalanlagen-hamburg14",
    title: "ITS-Dienste an Lichtsignalanlagen Hamburg",
    description: "Der Datensatz dient der Darstellung des Ausrüstungsstands der verschiedenen LSA-bezogenen ITS-Projekte des LSBG. Dargestellt sind die verfügbaren Services sowie eine Beschreibung der Services sowie de",
    url: "https://geodienste.hamburg.de/HH_WFS_ITS_Dienste_Hamburg?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:its_iot_registry",
    organization: "Landesbetrieb Straßen, Brücken und Gewässer",
    keywords: []
  },
  {
    id: "hafenmessfahrten-2016-hamburg17",
    title: "Hafenmessfahrten 2016 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2016 wurden zwei Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafenmessfahrten_2016?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "xplanungsdaten-hamburg6",
    title: "XPlanungsdaten Hamburg",
    description: "Dieser Datensatz umfasst die nach dem XPlanungsstandard digitalisierten Planungsdaten von Hamburg. Der XPlanungsstandard ermöglicht es, die Inhalte von Planwerken der Raumordnung, Landes- und Regiona",
    url: "https://hh.xplanungsplattform.de/xplan-wfs/services/wfs51?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "hafenmessfahrten-2019-hamburg14",
    title: "Hafenmessfahrten 2019 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2019 wurden drei Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_hafenmessfahrten_2019?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ammonium_20190403",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "waermekataster-hamburg-hypothetisches-waermenetz13",
    title: "Wärmekataster Hamburg – Hypothetisches Wärmenetz",
    description: "Jedes Gebäude, das bisher nicht in einem Gebiet mit vorhandenem Wärmenetz liegt, wurde fiktiv an ein hypothetisches Wärmenetz angeschlossen. Das hypothetische Wärmenetz gibt Auskunft über die Wärmelin",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Hypothetisches_Waermenetz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["gebäude"]
  },
  {
    id: "waermekataster-heizungsart-zensus2011-hamburg12",
    title: "Wärmekataster Heizungsart ZENSUS2011 Hamburg",
    description: "Der Datensatz \"Heizungsart ZENSUS2011\" des Wärmekatasters ist eine Auswertung der ZENSUS-Daten 2011 über die überwiegende Heizungsart im Gebäude. Es werden die Anteile der Heizungsarten Fernheizu...",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Heizungsart_ZENSUS2011?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["gebäude"]
  },
  {
    id: "waermekataster-waermebedarf-hamburg14",
    title: "Wärmekataster Wärmebedarf Hamburg",
    description: "Der Datensatz „Wärmebedarf“ des Wärmekatasters stellt den Nutzwärmebedarf (Abk.: NWB - Wärmebedarf für Heizung und Warmwasser) des Hamburger Gebäudebestandes in aggregierter Form dar. Der (Nutz-) Wärm",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Waermebedarf?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "gebäude"]
  },
  {
    id: "grossraum-und-schwertransport-routen-in-hamburg29",
    title: "Großraum- und Schwertransport-Routen in Hamburg",
    description: "Es handelt sich um eine Zusammenstellung von Routen für den Großraum- und Schwertransportverkehr in und durch Hamburg, welche im Hamburger Verkehrsportal visualisiert werden kann. Sie dient zur Unters",
    url: "https://geodienste.hamburg.de/HH_WFS_Grossraum_und_Schwertransport_Routen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:grossraum_schwertransport_netz",
    organization: "Behörde für Inneres und Sport",
    keywords: ["verkehr", "transport", "port"]
  },
  {
    id: "hafenmessfahrten-2015-hamburg23",
    title: "Hafenmessfahrten 2015 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2015 wurden drei Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafenmessfahrten_2015?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "bruecken-und-sonstige-ingenieurbauwerke-hamburg11",
    title: "Brücken und sonstige Ingenieurbauwerke Hamburg",
    description: "Bestehende Bauwerke im Zuständigkeitsbereich des LSBG mit Informationen über Standort, ASB-Nummer, interner Bauwerksnummer, Bauwerksname und Baujahr. Folgende Bauwerke werden geführt: Straßenbrücken",
    url: "https://geodienste.hamburg.de/HH_WFS_Brueckenbauwerke?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bauwerke_in_planung",
    organization: "Landesbetrieb Straßen, Brücken und Gewässer",
    keywords: []
  },
  {
    id: "waermekataster-hamburg-quartierssanierungsprojekte13",
    title: "Wärmekataster Hamburg –Quartierssanierungsprojekte",
    description: "Die Stadt Hamburg (Behörde für Umwelt und Energie) begleitet, unterstützt und fördert energetische Quartierskonzepte, die Maßnahmen zur Steigerung der Gesamtenergieeffizienz in einem Quartier beleucht",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Quartierssanierungsprojekte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["umwelt", "energie"]
  },
  {
    id: "standorte-von-mr-hamburg-mitte4",
    title: "Standorte von MR Hamburg-Mitte",
    description: "Der Datensatz enthält die Betriebshof-, Büro-, Friedhof- sowie Lagerplatz Standorte des Fachamtes Management des öffentlichen Raumes (MR) im Bezirk Hamburg-Mitte. Es werden Informationen zum jeweilige",
    url: "https://geodienste.hamburg.de/wfs_standorte_mr_mitte?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:standorte_mmr",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "alkis-bodenschaetzungskarte-hamburg16",
    title: "ALKIS Bodenschätzungskarte Hamburg",
    description: "Alle landwirtschaftlich nutzbaren Flächen unterliegen aus Gründen einer einheitlichen Besteuerung der Bodenschätzung. Die Ergebnisse der Bodenschätzung werden im ALKIS Liegenschaftskataster geführt. U",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenschaetzung?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:alkis_schaetzung_flaechen",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["grün"]
  },
  {
    id: "hafenmessfahrten-2018-hamburg18",
    title: "Hafenmessfahrten 2018 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2018 wurden vier Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafenmessfahrten_2018?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ammonium_20180405",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "verkehrsmengen-auf-hauptverkehrsstrassen-in-hamburg42",
    title: "Verkehrsmengen auf Hauptverkehrsstraßen in Hamburg",
    description: "Der Datensatz enthält die Verkehrsmengen auf Hauptverkehrsstraßen (HVS) sowie Bundesautobahnen (BAB). Verkehrsmengenkarte 2019: Für das Jahr 2019 erfolgt die Angabe der Verkehrsmengen als durchschni",
    url: "https://geodienste.hamburg.de/HH_WFS_Dynamisches_Koordinierungsnetz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr", "bahn"]
  },
  {
    id: "dwista-tafeln-dynamische-wegweiser-mit-integrierter-stauinformation30",
    title: "dwista - Tafeln dynamische Wegweiser mit integrierter Stauinformation",
    description: "Der Datensatz wird von der Freien und Hansestadt Hamburg nicht mehr gepflegt. Für entsprechende Daten ist die Autobahn GmbH zuständig",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehr_opendata?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:verkehr_dwista",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "uebersicht-kachelbezeichnungen-hamburg14",
    title: "Übersicht Kachelbezeichnungen Hamburg",
    description: "Mit der Übersicht Kachelbezeichnungen werden Flächenquadrate für verschiedene Geobasisdaten des Landesbetriebes Geoinformation und Vermessung dargestellt. Der Datensatz und die herunterzuladenden Date",
    url: "https://geodienste.hamburg.de/HH_WFS_Uebersicht_Kachelbezeichnungen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "einzugsbereiche-von-hvv-haltestellen-hamburg5",
    title: "Einzugsbereiche von HVV-Haltestellen Hamburg",
    description: "Der Datensatz enthält die Einzugsbereiche von Haltestellen des Hamburger Verkehrsverbunds (HVV) im Hamburger Stadtgebiet. Der Einzugsbereich (Realfußwegdistanz) von Fernverkehr, Regionalbahn (RE/RB/AK",
    url: "https://geodienste.hamburg.de/HH_WFS_HVV_Einzugsbereiche?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr", "bahn"]
  },
  {
    id: "integrierte-stadtteilentwicklung-rise-foerdergebiete-in-hamburg16",
    title: "Integrierte Stadtteilentwicklung - RISE - Fördergebiete in Hamburg",
    description: "Die Karte zeigt die Fördergebiete des Hamburger Rahmenprogramms Integrierte Stadtteilentwicklung (RISE). RISE bildet das programmatische Dach der Städtebauförderung auf der Landesebene. Es umfasst die",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_RISE_FG?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:aktive_stadt_und_ortsteilzentren",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "hamburger-gruendachfoerderung-karte-plus-foerderung2",
    title: "Hamburger Gründachförderung – Karte PLUS Förderung",
    description: "Gefördert wird der Bau von Dachbegrünung auf Gebäuden im Innenstadtbereich Hamburg und Innenstadtbereich Bergedorf im Rahmen der Hamburger Gründachstrategie. Bei Maßnahmen in der Inneren Stadt sowie i",
    url: "https://geodienste.hamburg.de/HH_WFS_Gruendach_Foerdergebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["grün", "gebäude"]
  },
  {
    id: "zuzuege-ausserhalb-hh-hamburg11",
    title: "Zuzüge außerhalb HH Hamburg",
    description: "Monatliche Zahl der Zuzüge von außerhalb Hamburg inklusive Unterteilung nach Familiennachzügen",
    url: "https://geodienste.hamburg.de/HH_WFS_Zuzuege_ausserhalb_HH?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=mic:Zuzuege",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "mrh-parkleitsystem-scharbeutz13",
    title: "MRH Parkleitsystem Scharbeutz",
    description: "Die Gemeinde Scharbeutz in der Lübecker Bucht verfügt für die Großparkplätze in Haffkrug und Scharbeutz über ein Parkleitsystem. Parkkapazitäten können mit dieser Hilfe alle 5 min übermittelt werden,",
    url: "https://geodienste.hamburg.de/MRH_WFS_Scharbeutz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Gemeindeverwaltung Scharbeutz",
    keywords: ["park"]
  },
  {
    id: "feuerwehrwachen-hamburg16",
    title: "Feuerwehrwachen Hamburg",
    description: "Dieser Datensatz stellt die Standorte der \"Staatlichen- und Freiwilligen Feuer- und Rettungswachen\" von Hamburg dar.",
    url: "https://geodienste.hamburg.de/HH_WFS_feuerwehrstandorte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:berufsfeuerwehr",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "genehmigungsbeduerftige-anlagen-nach-bundes-immissionsschutzgesetz-bimschg-anlagen-hamburg12",
    title: "Genehmigungsbedürftige Anlagen nach Bundes-Immissionsschutzgesetz (BImSchG-Anlagen Hamburg)",
    description: "Der Geodatensatz enthält genehmigungsbedürftige Anlagen nach §§ 4 ff. Bundes-Immissionsschutzgesetz (BImSchG) im Gebiet der Freien und Hansestadt Hamburg.",
    url: "https://geodienste.hamburg.de/HH_WFS_BImSchG_auf_Anlagenebene?service=WFS&request=DescribeFeatureType&version=2.0.0&typename=de.hh.up:bimschg_auf_anlagenebene",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "anlagen-nach-der-industrieemissions-richtlinie-in-hamburg-ied-anlagen-hamburg16",
    title: "Anlagen nach der Industrieemissions-Richtlinie in Hamburg (IED-Anlagen Hamburg)",
    description: "Der Geodatensatz enthält Anlagen nach Anhang 1 der Europäischen Richtlinie 2010/75/EU über Industrieemissionen (IE-Richtlinie) im Gebiet der Freien und Hansestadt Hamburg.",
    url: "https://geodienste.hamburg.de/HH_WFS_IED_Anlagen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ied_anlagen",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "erhaltenswerte-backsteingebiete-und-ensembles-in-hamburg17",
    title: "Erhaltenswerte Backsteingebiete und -ensembles in Hamburg",
    description: "Durch die Umsetzung der Anforderungen aus der Energiesparverordnung EnEV des Bundes und der Hamburger Klimaschutzverordnung wurde durch die im Zuge dessen vorgenommenen Fassadendämmungen auch das Ersc",
    url: "https://geodienste.hamburg.de/HH_WFS_Backstein_Kategorien?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:backstein_kategorien,b_gebaeude_kulturdenkmal_donut",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["klima", "energie"]
  },
  {
    id: "trinkwasserbrunnen-hamburg5",
    title: "Trinkwasserbrunnen Hamburg",
    description: "Die Qualität des Hamburger Trinkwassers gehört zu den besten im Lande. Davon können sich sowohl Hamburger:innen als auch Tourist:innen von Mai bis Oktober an den verschiedenen Standorten selbst überze",
    url: "https://geodienste.hamburg.de/wfs_trinkwasserbrunnen?Service=WFS&Version=2.0.0&Request=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "bevoelkerungsdaten-zu-stadtteilen-in-hamburg12",
    title: "Bevölkerungsdaten zu Stadtteilen in Hamburg",
    description: "Achtung: Dieser Dienst wird nicht weitergeführt und demnächst gelöscht. Aktuelle Daten finden sich in dem Dienst \"Regionalstatistische Daten der Stadtteile Hamburgs\". Statistische Daten zu Bevölk...",
    url: "https://geodienste.hamburg.de/HH_WFS_Statistik_Stadtteile_Bevoelkerung?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bevoelkerung_alleinerz_prz_31122014",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "deichinformationen-hamburg13",
    title: "Deichinformationen Hamburg",
    description: "Informationen zum öffentlichen Hochwasserschutz in Hamburg: Es werden die Hauptdeichlinie mit ihrer Kilometrierung, die Deichgrundfläche und die einzelnen Hochwasserschutzbauwerke abgebildet. Über die",
    url: "https://geodienste.hamburg.de/HH_WFS_Deichinformationen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Straßen, Brücken und Gewässer",
    keywords: ["wasser"]
  },
  {
    id: "statistische-gebiete-in-hamburg24",
    title: "Statistische Gebiete in Hamburg",
    description: "Die Einteilung Hamburgs in jetzt 943 Statistische Gebiete (Stand: April 2016) erfolgte im Anschluss an die Volkszählung 1987. Die Statistischen Gebiete sind eine Zusammenfassung von nebeneinander lieg",
    url: "https://geodienste.hamburg.de/HH_WFS_Statistische_Gebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "schienennetze-norddeutschland49",
    title: "Schienennetze Norddeutschland",
    description: "Der Datensatz enthält alle relevanten Schienennetze in Norddeutschland, differenziert nach der jeweiligen Art (Fernbahn elektrifiziert, Fernbahn nicht elektrifiziert, U-Bahn, S-Bahn, Straßen-/Stadtbah",
    url: "https://geodienste.hamburg.de/HH_WFS_Schienennetze_Norddeutschland?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "mrh-grenzgeschichten11",
    title: "MRH Grenzgeschichte(n)",
    description: "Museen, Erinnerungs- und Gedenkorte, die sich mit der Geschichte der ehemaligen innerdeutschen Grenze beschäftigen, werden über diese Inhalte dargestellt. Das interessierte Publikum findet hier eine i",
    url: "https://geodienste.hamburg.de/MRH_WFS_Grenzgeschichten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:grenzgeschichten",
    organization: "Behörde für Wirtschaft und Innovation (BWI)",
    keywords: []
  },
  {
    id: "dalben-binnenhafen-hamburg-harburg7",
    title: "Dalben Binnenhafen Hamburg-Harburg",
    description: "Der Datensatz beinhaltet die Standorte der Dalben der Freien und Hansestadt Hamburg im Harburger Binnenhafen.",
    url: "https://geodienste.hamburg.de/HH_WFS_Dalben_Binnenhafen_Hamburg_Harburg?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dalben_binnenhafen",
    organization: "Bezirksämter",
    keywords: ["hafen"]
  },
  {
    id: "wohnungsdaten-zu-stadtteilen-in-hamburg18",
    title: "Wohnungsdaten zu Stadtteilen in Hamburg",
    description: "Achtung: Dieser Dienst wird nicht weitergeführt und demnächst gelöscht. Aktuelle Daten finden sich in dem Dienst \"Regionalstatistische Daten der Stadtteile Hamburgs\". Statistische Daten zu Wohnungen",
    url: "https://geodienste.hamburg.de/HH_WFS_Statistik_Stadtteile_Wohnungsdaten?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:wohnstatistik_wohnfl_31122014",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "wahlergebnisse-zu-stadtteilen-in-hamburg18",
    title: "Wahlergebnisse zu Stadtteilen in Hamburg",
    description: "Achtung: Dieser Dienst wird nicht weitergeführt und demnächst gelöscht. Wahlergebnisse zur Bürgerschaftswahl vom 15.02.2015 für die Hamburger Stadtteile. Endgültiges Ergebnis: Listenstimmen Gesamtst",
    url: "https://geodienste.hamburg.de/HH_WFS_Statistik_Stadtteile_Wahlergebnisse?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:wahlergebnis_buew_afd_prz_15022015",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "geodaten-zu-wahlen-von-schleswig-holstein-bundestags-und-landtagswahl26",
    title: "Geodaten zu Wahlen von Schleswig-Holstein (Bundestags- und Landtagswahl)",
    description: "Die Bundestags- und Landtagswahlkreise von Schleswig-Holstein sind räumlich abgegrenzte Teile des Wahlgebietes des Landes Schleswig-Holstein, in denen die Wahlberechtigten jeweils ein bzw. drei bis fü",
    url: "https://geodienste.hamburg.de/SH_WFS_Wahlen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bundestagswahlkreise",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "bodenlehrpfade28",
    title: "Bodenlehrpfade",
    description: "Das Objekt Bodenlehrpfade enthält die Informationen über die 4 Bodenlehrpfade in Hamburg. Harburg, Wohldorf, Boberg und Bille-Siedlung Layer: Bodenlehrpfad_Wege Layer: Bodenlehrpfad_Tafeln",
    url: "https://geodienste.hamburg.de/HH_WFS_Bodenlehrpfade?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:bodenlehrpfade_parken_bille",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "fachplan-schutzwuerdige-boeden-hamburg13",
    title: "Fachplan Schutzwürdige Böden Hamburg",
    description: "Auf Basis eines Fachgutachtens über Bereiche in Hamburg mit Böden hoher Ausprägung der Archiv- und Lebensraumfunktionen werden Gebiete ausgewiesen, die bei Inanspruchnahme durch Stadtplanungsprozesse",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzboeden?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:archiv_naturgeschichte",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "senior-innentreffs-und-senior-innengruppen-hamburg9",
    title: "Senior:innentreffs und Senior:innengruppen Hamburg",
    description: "Alle Senior;innentreffs und Senior:innenkreise verbindet das gemeinsame Ziel, Kontakte zwischen den Menschen zu fördern. Nach dem Ausstieg aus dem Erwerbstätigkeit, dem Weggang der Kinder, auch dem Ve",
    url: "https://geodienste.hamburg.de/HH_WFS_seniorentreffs?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:seniorenkreise_gruppen",
    organization: "Behörde für Wissenschaft, Forschung, Gleichstellung und Bezirke (BWFGB)",
    keywords: ["kinder"]
  },
  {
    id: "verbandsgrenzen-wasser-und-bodenverbaende-hamburg12",
    title: "Verbandsgrenzen Wasser- und Bodenverbände Hamburg",
    description: "Verbandsgrenzen der Wasser- und Bodenverbände in Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Wasser_und_Bodenverbaende?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "zuwanderung-hamburg17",
    title: "Zuwanderung Hamburg",
    description: "Monatliche Zuwanderungszahlen von Wohnungslosen, Teilnehmer Jungerwachsenen-Programm, Wohnberechtigte Zuwanderer und nichtwohnberechtigte Zuwanderer",
    url: "https://geodienste.hamburg.de/HH_WFS_Zuwanderung?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=mic:Zuwanderung",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "waermekataster-gebiet-mit-waermenetz-hamburg13",
    title: "Wärmekataster Gebiet mit Wärmenetz Hamburg",
    description: "Der Datensatz „Gebiet mit Wärmenetz“ verortet Gebiete, in denen ein Wärmenetz für die Wärmeversorgung der Gebäude vorliegt. Diese Information impliziert allerdings nicht, dass alle Gebäude in dem jewe",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Gebiete_Waermenetz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["gebäude"]
  },
  {
    id: "waermekataster-hamburg-b-plaene-mit-energetischen-vorgaben12",
    title: "Wärmekataster Hamburg – B-Pläne mit energetischen Vorgaben",
    description: "Bebauungspläne (Verbindliche Bauleitpläne, B-Pläne) sind rechtsverbindliche Pläne, zu denen Baustufenpläne, Teilbebauungspläne, Durchführungspläne und seit 1962 die heutigen Bebauungspläne nach dem Bu",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_BPlaene_mit_energetischen_Vorgaben?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "partnerkarte-der-umweltpartnerschaft-hamburg16",
    title: "Partnerkarte der UmweltPartnerschaft Hamburg",
    description: "Der Datensatz enthält die Stammdaten der aktiven Partner der UmweltPartnerschaft Hamburg. Die UmweltPartnerschaft ist die Institution zur Förderung des freiwilligen betrieblichen Umweltschutzes in Ha",
    url: "https://geodienste.hamburg.de/HH_WFS_Umweltpartner?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:umweltpartner",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["umwelt"]
  },
  {
    id: "vertragskataster-mr-hamburg-mitte3",
    title: "Vertragskataster - MR Hamburg-Mitte",
    description: "Dieser Dienst zeigt die Verortung der öffentlich rechtlichen Verträge des Vertragskatasters von MR (Fachamt Management des öffentlichen Raumes) des Bezirks Hamburg-Mitte. Der Dienst erhebt keinen Ans",
    url: "https://geodienste.hamburg.de/wfs_vertragskataster_mr_mitte?Service=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "hafenmessfahrten-2017-hamburg18",
    title: "Hafenmessfahrten 2017 Hamburg",
    description: "An der Elbe und im Hafen werden zusätzlich zum Betrieb der Messstationen mehrfach im Jahr mobile Messungen mit einem Messschiff durchgeführt. Im Jahr 2017 wurden drei Untersuchungen der Wasserqualitä",
    url: "https://geodienste.hamburg.de/HH_WFS_Hafenmessfahrten_2017?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ammonium_20170512",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser", "hafen"]
  },
  {
    id: "jacobusweg-hamburg5",
    title: "Jacobusweg Hamburg",
    description: "Dieser Dienst zeigt den Pilgerpfad Jacobusweg, der auf Hamburger Stadtgebiet von der Hauptkirche St. Jacobi über Wilhelmsburg nach Harburg, vorbei an einer der ältesten Kirchen Hamburgs in Sinstorf fü",
    url: "https://geodienste.hamburg.de/WFS_Jacobusweg_Hamburg?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:jacobusweg",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "hoehenpunkte-gebrauchshoehen14",
    title: "Höhenpunkte (Gebrauchshöhen)",
    description: "Überall dort, wo präzise Höhenangaben gefragt sind, werden Höhenfestpunkte seit je her für vermessungstechnische Aufgaben und Lösungen im Rahmen der Bauvermessung, Landkartenherstellung und Landesverm",
    url: "https://geodienste.hamburg.de/HH_WFS_Hoehenpunkte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "dauerzaehlstellen-rad-hamburg12",
    title: "Dauerzählstellen (Rad) Hamburg",
    description: "Dieser Datensatz enthält den Standort der Radverkehrszählsäule An der Gurlittinsel. Er enthält die Tagesganglinie vom Vortag, die Wochenganglinie der Vorwoche und die Jahresganglinie des aktuellen Jah",
    url: "https://geodienste.hamburg.de/HH_WFS_Dauerzaehlstellen_Rad?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "zaehlstellenbereiche-von-strassenverkehrszaehlungen-hamburg11",
    title: "Zählstellenbereiche von Straßenverkehrszählungen Hamburg",
    description: "Dieser Datensatz enthält die Zählstellenbereiche aller seit dem Jahr 2004 von der Behörde für Wirtschaft, Verkehr und Innovation (BWVI) (seit 2020 \"Behörde für Verkehr und Mobilitätswende\" BVM) d...",
    url: "https://geodienste.hamburg.de/DE_HH_INSPIRE_WFS_SVZ_Zaehlstellenbereiche?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "modal-split-hamburg13",
    title: "Modal Split Hamburg",
    description: "Der wegebezogene Modal Split beschreibt die prozentuale Verteilung aller von Hamburgerinnen und Hamburgern zurückgelegten Wege auf die Verkehrsmodi „Motorisierter Individualverkehr (MIV)“, „Öffentlich",
    url: "https://geodienste.hamburg.de/HH_WFS_Modalsplit?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:modalsplit_bezirke",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "notunterkuenfte-hamburg14",
    title: "Notunterkünfte Hamburg",
    description: "Zum Schutz bei Sturmfluten und anderen Anlässen stellt der Katastrophen- und Zivilschutz in Hamburg der Bevölkerung Notunterkünfte zur Verfügung.",
    url: "https://geodienste.hamburg.de/HH_WFS_Notunterkuenfte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "waermekataster-stromverbrauch-hamburg12",
    title: "Wärmekataster Stromverbrauch Hamburg",
    description: "Der Datensatz „Stromverbrauch“ des Wärmekatasters stellt den realen Stromverbrauch des Hamburger Gebäudebestands in aggregierter und damit anonymisierter Form dar. Die Daten werden von Stromnetz Hambu",
    url: "https://geodienste.hamburg.de/HH_WFS_Waermekataster_Stromverbrauch?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["gebäude", "strom"]
  },
  {
    id: "fahrstreifengenauer-datensatz-der-teststrecke-fuer-automatisiertes-und-vernetztes-fahren-tavf4",
    title: "Fahrstreifengenauer Datensatz der Teststrecke für automatisiertes und vernetztes Fahren (TAVF)",
    description: "Der Datensatz enthält den Verlauf der Teststrecke für Automatisiertes und Vernetztes Fahren in Hamburg (TAVF). Das Team Verkehrs- und Infrastrukturprojekte des LGV beschäftigt sich seit 2019 mit dem",
    url: "https://geodienste.hamburg.de/HH_WFS_automatisiertes_Fahren?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "einzelhandel-zentrale-versorgungsbereiche-zvb-hamburg14",
    title: "Einzelhandel - Zentrale Versorgungsbereiche (ZVB) – Hamburg",
    description: "Datensatzbeschreibung „Zentrale Versorgungsbereiche“ Im Jahr 2016 wurden für alle 7 Hamburger Bezirke flächendeckend Daten zu Nahversorgung und Einzelhandel erhoben. Die erhobenen Daten waren Grundla",
    url: "https://geodienste.hamburg.de/HH_WFS_Einzelhandel_ZVB?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dienstleistungen",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "verkehrslage-hamburg12",
    title: "Verkehrslage Hamburg",
    description: "Der Datensatz enthält die Verkehrslage in Echtzeit (Aktualisierung alle 5 Minuten) auf dem Hamburger Straßennetz und auf größeren Straßen im direkten Hamburger Umland sowie auf den durch Hamburg verla",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehrslage?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "dienststellenstandorte-der-strassenbauverwaltungen-hamburg23",
    title: "Dienststellenstandorte der Straßenbauverwaltungen Hamburg",
    description: "Dieser Datensatz enthält die Dienststellenstandorte der Hamburger Straßenbauverwaltungen, Autobahnmeistereien, sowie Außenstellen der jeweiligen Struktureinheit.",
    url: "https://geodienste.hamburg.de/DE_HH_INSPIRE_WFS_Dienststellenstandorte_SBV?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "fachberatungsstellen-gegen-sexualisierte-gewalt-hamburg3",
    title: "Fachberatungsstellen gegen sexualisierte Gewalt Hamburg",
    description: "Im Mittelpunkt der Arbeit der Fachberatungsstellen steht die Beratung für von sexualisierter Gewalt betroffene Kinder und Jugendliche sowie für junge Erwachsene, die in ihrer Kindheit und Jugend sexua",
    url: "https://geodienste.hamburg.de/wfs_beratung_sexualisierte_gewalt?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: ["kinder"]
  },
  {
    id: "bezirksradrouten-hamburg-eimsbuettel-finales-zielnetz5",
    title: "Bezirksradrouten Hamburg Eimsbüttel (Finales Zielnetz)",
    description: "Der Datensatz enthält das Netz der Bezirksradrouten für den Alltagsradverkehr im Hamburger Bezirk Eimsbüttel. Die Bezirksradrouten verbinden wichtige Ziele innerhalb der Bezirke und Stadtteile und si",
    url: "https://geodienste.hamburg.de/HH_WFS_Bezirksrouten_Eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "kreuzungsskizzen-hamburg15",
    title: "Kreuzungsskizzen Hamburg",
    description: "Skizzen von beampelten Kreuzungen in Hamburg. Mit dem Programm Auto-CAD erstellte Lagepläne der Lichtzeichenanlagen in Hamburg einschließlich des Hafengebietes werden als Datensatz für den Fachdatense",
    url: "https://geodienste.hamburg.de/wfs_kreuzungsskizzen?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Inneres und Sport",
    keywords: ["hafen"]
  },
  {
    id: "polizeikommissariate-hamburg20",
    title: "Polizeikommissariate Hamburg",
    description: "Die Polizeikommissariate Hamburg enthalten die Gebietsgrenzen, die die örtlichen Zuständigkeiten der Hamburger Polizeikommissariatsgebiete regelt und die Standorte der Polizeikommissariate.",
    url: "https://geodienste.hamburg.de/HH_WFS_PKGrenzen?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "wilhelmsburger-loop-hamburg-mitte3",
    title: "Wilhelmsburger Loop Hamburg-Mitte",
    description: "Dieser Dienst zeigt den Wilhelmsburger Loop (plattdeutsch für „Lauf“, „Bewegung“, engl. für „Schleife“) - eine Vielzweckstrecke für Sport und Freizeit. Mit einer Länge von ca. 6,5 km eignet sich die S",
    url: "https://qs-geodienste.hamburg.de/wfs_wilhelmsburger_loop?Service=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["port"]
  },
  {
    id: "lichtsignalanlagen-hamburg42",
    title: "Lichtsignalanlagen Hamburg",
    description: "Der Datensatz enthält Lage, Namen und Knotennummer aller Lichtsignalanlagen im Hamburger Stadtgebiet (ohne Hamburg Port Authority [HPA]). Signalisierte Übergänge/Einmündung etc., die als Teilknoten de",
    url: "https://geodienste.hamburg.de/HH_WFS_Lichtsignalanlagen?SERVICE=WFS&VERSION=2.0.0&REQUEST=DescribeFeatureType&typename=de.hh.up:lsa_knotengrunddaten",
    organization: "Landesbetrieb Straßen, Brücken und Gewässer",
    keywords: ["port"]
  },
  {
    id: "angebote-des-freiwilligen-engagements-hamburg15",
    title: "Angebote des freiwilligen Engagements Hamburg",
    description: "Hier finden Sie Angebote, die Sie bei der Suche nach einem freiwilligen Engagement unterstützen. Freiwilligenagenturen sind Angebote zur Förderung des freiwilligen Engagements. Sie bieten kostenlose",
    url: "https://geodienste.hamburg.de/HH_WFS_Freiwilliges_Engagement?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:freiwilligenagenturen",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "virtuelle-passpunkte-hamburg30",
    title: "Virtuelle Passpunkte Hamburg",
    description: "Das Produkt virtuelle Passpunkte ist ein Hilfsmittel zur eindeutigen spannungsfreien Transformation georeferenzierter Daten aus dem veralteten Koordinatenreferenzsystem (Lagestatus 100, Potsdam-Datum",
    url: "https://geodienste.hamburg.de/HH_WFS_Virtuelle_Passpunkte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "bruchkanten-hamburg28",
    title: "Bruchkanten Hamburg",
    description: "Bruchkanten definieren Unterbrechungen des kontinuierlichen Verlaufs einer Geländeoberfläche (z.B. Böschungen, Stützmauern). 2008 wurden für die Fläche der Freien und Hansestadt Hamburg (ohne das Geb",
    url: "https://geodienste.hamburg.de/HH_WFS_Bruchkanten?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "planungsregionen-schulentwicklungsplan-sepl-hamburg13",
    title: "Planungsregionen Schulentwicklungsplan (SEPL) Hamburg",
    description: "Dargestellt werden die Raumgrenzen der Planungsregionen des Schulentwicklungsplans (SEPL) Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_schulen_sepl?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:schulen_sepl",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["schule"]
  },
  {
    id: "zeb-zustandsklassen-hamburg17",
    title: "ZEB Zustandsklassen Hamburg",
    description: "Der Datensatz enthält die Straßenzustandsklassen aller Hamburger Straßen, welche im Rahmen der regelmäßig stattfindenden Zustandserfassung und -bewertung (ZEB) seit 2014 befahren und ausgewertet wurde",
    url: "https://geodienste.hamburg.de/HH_WFS_ZEB_Zustandsklassen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:zeb2014_geb",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "landesgrundbesitzverzeichnis-hamburg29",
    title: "Landesgrundbesitzverzeichnis Hamburg",
    description: "Das Landesgrundbesitzverzeichnis dient der Freien und Hansestadt Hamburg als Nachweis über alle landeseigenen Grundstücke und grundstücksgleichen Rechte. Landeseigener Grundbesitz ist in dem Verzeic",
    url: "https://geodienste.hamburg.de/HH_WFS_LIG_Grundbesitz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:agv_belastet_mit_erbbaurecht",
    organization: "Landesbetrieb Immobilienmanagement und Grundvermögen",
    keywords: []
  },
  {
    id: "fahrradbuegel-eimsbuettel-hamburg3",
    title: "Fahrradbügel Eimsbüttel Hamburg",
    description: "Der Datensatz enthält die Standorte von Fahrradbügeln im Bezirk Eimsbüttel. Ein Standort kann mehrere Bügel enthalten. Im Datensatz ist die (ungefähre) Adresse der Radbügel angegeben.",
    url: "https://geodienste.hamburg.de/wfs_fahrradbuegel_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["rad", "fahrrad"]
  },
  {
    id: "stammdaten-hamburger-sportstaetten11",
    title: "Stammdaten Hamburger Sportstätten",
    description: "Der Datensatz enthält die Stammdaten Hamburger Sportstätten. Für jede Sportstätte Hamburg werden dargestellt: - Name - Adresse (Straße, Hausnummer, PLZ, Ort, Geoposition) - Träger - Ausstattungsmerkm",
    url: "https://geodienste.hamburg.de/HH_WFS_Sportstaetten?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["port"]
  },
  {
    id: "verkehrszellen-verkehrsmodell-hamburg12",
    title: "Verkehrszellen Verkehrsmodell Hamburg",
    description: "Der Datensatz enthält die Verkehrszellen für das kleinräumige Verkehrsmodell für Hamburg und Umgebung. Verkehrszelle ist ein Begriff aus der Verkehrsplanung und bezeichnet ein zum Zwecke einer Verkehr",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehrszellen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:verkehrszellen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "rechen-eimsbuettel-hamburg3",
    title: "Rechen Eimsbüttel Hamburg",
    description: "Im Datensatz Rechen Eimsbüttel Hamburg werden die Anlagen zum Auffangen von größeren schwimmenden Materialien - wie zum Beispiel Ästen - an Gewässern der Wasserwirtschaft Eimsbüttel verortet. Die Rec",
    url: "https://geodienste.hamburg.de/wfs_rechen_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["wasser"]
  },
  {
    id: "wohnungsbauprojekte26",
    title: "Wohnungsbauprojekte",
    description: "Ausgewählte abgeschlossene Wohnungsbauprojekte werden mit einer kurzen Beschreibung und einem Bild vorgestellt. Die Informationen sind zudem mit einer Projektseite auf hamburg.de verlinkt. Hinweis: I",
    url: "https://geodienste.hamburg.de/HH_WFS_Wohnungsbauprojekte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "uebersicht-kachelbezeichnung-datenklasse-dop5-langzeitspeicherung-hamburg10",
    title: "Übersicht Kachelbezeichnung Datenklasse DOP5 Langzeitspeicherung Hamburg",
    description: "Der Kartendienst stellt die Umringe der Digitalen Orthophotos(DOP) 5cm unbelaubt in Hamburg dar. Mit Hilfe der Umringe ist ein georeferenziertes Suchen der DOPs in der Langzeitspeicherung möglich. Di",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_DKL_DOP5?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dkl_dop5_2018",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "drohnenflugverbotszonen-hamburg12",
    title: "Drohnenflugverbotszonen Hamburg",
    description: "Darstellung des Kontrollierten Luftraumes, in dem der Einsatz von Drohnen unzulässig ist.",
    url: "https://geodienste.hamburg.de/HH_WFS_Drohnenflugverbotszonen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:hubschrauberlandplaetzekrankenhaeuser",
    organization: "Behörde für Inneres und Sport",
    keywords: []
  },
  {
    id: "strassendeckschichttypen-nach-rls-19-in-hamburg8",
    title: "Straßendeckschichttypen nach RLS-19 in Hamburg",
    description: "Der Datensatz enthält die Straßendeckschichttypen nach den Richtlinien für den Lärmschutz an Straßen (RLS-19) auf dem Hamburger Stadtstraßennetz. Er basiert auf der Verschneidung folgender verschied",
    url: "https://geodienste.hamburg.de/HH_WFS_Strassendecke?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:strassendeckschicht",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "zuzuege-auszuege-oeru-hamburg11",
    title: "Zuzüge/Auszüge örU Hamburg",
    description: "monatliche Zahlen zu Zuzügen und Auszügen in öffentlich-rechtlichen Unterkünften",
    url: "https://geodienste.hamburg.de/HH_WFS_Zuzuege_Auszuege_oerU?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=mic:Zuzuege_Auszuege_oerU",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "regionalstatistische-daten-der-bezirke-hamburgs-und-hamburg-insgesamt18",
    title: "Regionalstatistische Daten der Bezirke Hamburgs und Hamburg insgesamt",
    description: "Bevölkerungs- und Sozialdaten, sowie Indikatoren für die Bezirke Hamburgs und Hamburg insgesamt seit dem Jahr 2013. Quellenangaben: https://www.statistik-nord.de/fileadmin/maps/Stadtteil_Profile_2020/",
    url: "https://geodienste.hamburg.de/wfs_regionalstatistische_daten_bezirke?Service=WFS&REQUEST=GetCapabilities",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: ["sozial"]
  },
  {
    id: "fertiggestellte-wohnungen25",
    title: "Fertiggestellte Wohnungen",
    description: "Überblick über alle fertiggestellten Wohnungen (pro Stadtteil) aus dem Jahr 2013 Weitere Informationen: www.hamburg.de/wohnungsbau",
    url: "https://geodienste.hamburg.de/HH_WFS_Baufertigstellungen2013?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "abstellflaechen-und-parkverbotszonen-e-scooter-hamburg5",
    title: "Abstellflächen und Parkverbotszonen E-Scooter Hamburg",
    description: "Dieser Datensatz enthält alle von der Freien und Hansestadt Hamburg festgelegten Abstellflächen und Parkverbotszonen für E-Scooter (E-Tretroller).",
    url: "https://geodienste.hamburg.de/hh_wfs_escooter?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["park"]
  },
  {
    id: "hundeauslaufzonen-fuer-hunde-nach-8-hamburger-hundeg13",
    title: "Hundeauslaufzonen für Hunde nach § 8 Hamburger HundeG",
    description: "Dieser Datensatz enthält die Hundeauslaufzonen für Hunde gemäß § 8 Absatz 3 Hamburger Hundegesetz in der Hansestadt Hamburg. Bei den Hundeauslaufzonen handelt es sich um besonders gekennzeichnete Flä",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_Hundeauslaufzonen_Paragraf_8?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:hundeauslaufzonen_paragraf_8",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "einzelhandel-nahversorgung-hamburg14",
    title: "Einzelhandel - Nahversorgung - Hamburg",
    description: "Im Jahr 2016 wurden für alle 7 Hamburger Bezirke flächendeckend Daten zu Nahversorgung und Einzelhandel erhoben. Die erhobenen Daten waren Grundlage für die Erstellung von Einzelhandels- und Nahversor",
    url: "https://geodienste.hamburg.de/HH_WFS_Einzelhandel?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:discounter",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "eignungsflaechen-hausboote-hamburg17",
    title: "Eignungsflächen Hausboote Hamburg",
    description: "-- Die Übersicht befindet sich z. Zt. noch im Aufbau und wird noch weiter aktualisiert! -- Die Karte beschreibt in einer Übersicht über alle Wasserflächen Hamburgs die Eignungsflächen für Hausboote z",
    url: "https://geodienste.hamburg.de/HH_WFS_Eignungsflaechen_Hausboote?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ausschlussflaechen",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: ["wasser"]
  },
  {
    id: "hinderniserfassungsbereich-sonderlandeplatz-hamburg-finkenwerder16",
    title: "Hinderniserfassungsbereich Sonderlandeplatz Hamburg-Finkenwerder",
    description: "Der Hinderniserfassungsbereich stellt den Bereich dar, in dessen Bereich in der Umgebung eines Sonderlandeplatzes für die Errichtung von permanentem (Bauwerken, Masten etc.) bzw. temporären (Kräne) ei",
    url: "https://geodienste.hamburg.de/HH_WFS_hinderniserfassungsbereich_sonderlandeplatz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:andere_beschriftungspunkte_p",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-bevoelkerung-der-stadtteile-hamburgs16",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Bevölkerung der Stadtteile Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zur Bevölkerung der Hamburger Stadtteile. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich die V",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Bev_Stadtteil?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_bevoelkerung_stadtteile",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung"]
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-schullandschaft-der-bezirke-hamburgs12",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Schullandschaft der Bezirke Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zu den Bezirken und Gesamthamburg. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich die Variable",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Schul_Bezirk?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_schullandschaft_bezirke",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung"]
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-bevoelkerung-der-statistischen-gebiete-hamburgs17",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Bevölkerung der Statistischen Gebiete Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zur Bevölkerung der Statistischen Gebiete Hamburgs. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet s",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Bev_Statgeb?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_bevoelkerung_statistische_gebiete",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung"]
  },
  {
    id: "dialogforum-schiene-hamburg-altona10",
    title: "Dialogforum Schiene Hamburg-Altona",
    description: "Der Datensatz enthält die das Dialogforum Schiene Hamburg-Altona betreffenden Projekte mit Verlinkungen zu den Projektseiten und den Verlauf der davon erheblich betroffenen nördlichen Güterumgehungsba",
    url: "https://geodienste.hamburg.de/HH_WFS_Dialogforum_Schiene_Altona?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "uebersicht-kachelbezeichnung-datenklasse-dop10-langzeitspeicherung-hamburg10",
    title: "Übersicht Kachelbezeichnung Datenklasse DOP10 Langzeitspeicherung Hamburg",
    description: "Der Kartendienst stellt die Umringe der Digitalen Orthophotos(DOP) 10cm unbelaubt in Hamburg dar. Mit Hilfe der Umringe ist ein georeferenziertes Suchen der DOPs in der Langzeitspeicherung möglich. D",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_DKL_DOP10?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dkl_dop10_2010",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "regionalstatistische-daten-der-stadtteile-hamburgs19",
    title: "Regionalstatistische Daten der Stadtteile Hamburgs",
    description: "Bevölkerungs- und Sozialdaten, sowie Indikatoren für die Stadtteile Hamburgs seit dem Jahr 2013. Quellenangaben: https://www.statistik-nord.de/fileadmin/maps/Stadtteil_Profile_2020/QuellenangabenKarte",
    url: "https://geodienste.hamburg.de/wfs_regionalstatistische_daten_stadtteile?Service=WFS&REQUEST=GetCapabilities",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: ["sozial"]
  },
  {
    id: "baugenehmigungen-pro-bezirk24",
    title: "Baugenehmigungen pro Bezirk",
    description: "Die seit 2011 erteilten Baugenehmigungen (pro Bezirk) im Überblick Weitere Informationen: www.hamburg.de/wohnungsbau",
    url: "https://geodienste.hamburg.de/HH_WFS_Baugenehmigungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:baugenehmigung_bezirke",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "einzelhandel-uebriger-einzelhandel-ohne-nahversorgung-hamburg14",
    title: "Einzelhandel - Übriger Einzelhandel ohne Nahversorgung - Hamburg",
    description: "Im Jahr 2016 wurden für alle 7 Hamburger Bezirke flächendeckend Daten zu Nahversorgung und Einzelhandel erhoben. Die erhobenen Daten waren Grundlage für die Erstellung von Einzelhandels- und Nahversor",
    url: "https://geodienste.hamburg.de/HH_WFS_Einzelhandel_o_NV?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:auto_motorrad_zubehoer",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-schullandschaft-der-stadtteile-hamburgs12",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Schullandschaft der Stadtteile Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zu den Hamburger Stadtteilen. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich die Variablenbene",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Schul_Stadtteil?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_schullandschaft_stadtteile",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung"]
  },
  {
    id: "postbrief-und-postablagekaesten-eimsbuettel-hamburg3",
    title: "Postbrief- und Postablagekästen Eimsbüttel Hamburg",
    description: "In diesem Datensatz sind die öffentlich zugänglichen Standorte der Postbriefkästen (gelbe Posteinwurfkästen) und Postablagekästen der Deutschen Post AG im Bezirk Eimsbüttel ersichtlich. Vor Ort sind d",
    url: "https://geodienste.hamburg.de/wfs_post_kaesten_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "kehrbezirke-der-schornsteinfeger-hamburg21",
    title: "Kehrbezirke der Schornsteinfeger Hamburg",
    description: "Kehrbezirke der bevollmächtigten Bezirksschornsteinfegerinnen und -feger gem. § 7 SchfHwG - Fachliche Grundlage: Schornsteinfegerhandwerksgesetz - SchfHwG",
    url: "https://geodienste.hamburg.de/HH_WFS_Kehrbezirke?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:kehrbezirke",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "projekte-zur-energiewende27",
    title: "Projekte zur Energiewende",
    description: "Der Datensatz enthält Informationen zu verschiedenen Projekten verschiedener Akteure der Energiewende in Hamburg, gegliedert nach 3 strategischen Kategorien: Mehr Effizienz - Zukunftsfähige Netze - Au",
    url: "https://geodienste.hamburg.de/HH_WFS_Energiewende?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:energiewende",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["energie"]
  },
  {
    id: "biotopverbund-der-feuchtlebensraeume-nicht-abgestimmte-fachgrundlage-hamburg3",
    title: "Biotopverbund der Feuchtlebensräume – nicht abgestimmte Fachgrundlage – Hamburg",
    description: "Im Rahmen der fachlichen Untersuchungen zum Biotopverbund in Hamburg wurde 2012 eine gesonderte Biotopverbunddarstellung für die Feuchtlebensräume entwickelt. Hier werden für die Feuchtlebensräume die",
    url: "https://geodienste.hamburg.de/wfs_biotopverbund_feuchtlebensraeume?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-schullandschaft-der-statistischen-gebiete-hamburgs12",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Schullandschaft der Statistischen Gebiete Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zu den Statistischen Gebieten Hamburgs. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich die Var",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Schul_Statgeb?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_schullandschaft_statistische_gebiete",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung"]
  },
  {
    id: "lastenradbuegel-eimsbuettel-hamburg3",
    title: "Lastenradbügel Eimsbüttel Hamburg",
    description: "Der Datensatz Lastenradbügel Eimsbüttel Hamburg zeigt die gebündelten Lastenradabstellmöglichkeiten im Bezirk auf. Durch Klick auf den im Layer hinterlegten Standort wird die Anzahl der Lastenradbügel",
    url: "https://geodienste.hamburg.de/wfs_lastenradbuegel_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["rad"]
  },
  {
    id: "rechtlicher-ausbau-von-strassenverkehrsflaechen-hamburg13",
    title: "Rechtlicher Ausbau von Straßenverkehrsflächen Hamburg",
    description: "Der Datensatz enthält für jede Straße soweit bekannt das Datum der erstmaligen endgültigen Herstellung sowie den Umfang des Ausbaus (bis zur Streichung des § 52HWG) nach den jeweiligen gesetzlichen Be",
    url: "https://geodienste.hamburg.de/HH_WFS_Rechtlicher_ausbau?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:ausbau_massnahme",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "feuerwehrwachen-eimsbuettel-hamburg3",
    title: "Feuerwehrwachen Eimsbüttel Hamburg",
    description: "Dieser Datensatz zeigt die Zuständigkeitsgebiete der beiden Berufsfeuerwachen, die im Bezirk Eimsbüttel stationiert sind. Diese bilden die Feuer- und Rettungswache Rotherbaum mit dem Kürzel \"F13\"...",
    url: "https://geodienste.hamburg.de/wfs_feuerwehrwachen_eimsbuettel?Service=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["baum"]
  },
  {
    id: "strategisches-strassennetz-hamburg27",
    title: "Strategisches Straßennetz Hamburg",
    description: "Das Strategische Straßennetz für das Verkehrsmanagement dient als Betrachtungsbasis, Verkehre auf diesem so störungsfrei wie möglich abzuwickeln und dabei die vorhandenen Leistungsreserven optimal zu",
    url: "https://geodienste.hamburg.de/HH_WFS_Strategisches_Strassennetz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "iot-registry-hamburg13",
    title: "IoT Registry Hamburg",
    description: "Im diesem Datensatz werden alle Sensorstandorte in Hamburg bereitgestellt, die über die SensorThingsAPI (STA) verfügbar sind.",
    url: "https://geodienste.hamburg.de/HH_WFS_IoT_Registry?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:iot_registry",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-bevoelkerung-der-sozialraeume-hamburgs17",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Bevölkerung der Sozialräume Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zur Bevölkerung der Hamburger Sozialräume. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich die",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Bev_Sozialraum?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_bevoelkerung_sozialraeume",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung", "sozial"]
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-bevoelkerung-der-bezirke-hamburgs17",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Bevölkerung der Bezirke Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zur Bevölkerung der Bezirke und Gesamthamburg. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich d",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Bev_Bezirk?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_bevoelkerung_bezirke",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung"]
  },
  {
    id: "uebersicht-kachelbezeichnung-datenklasse-dop10b-langzeitspeicherung-hamburg12",
    title: "Übersicht Kachelbezeichnung Datenklasse DOP10B Langzeitspeicherung Hamburg",
    description: "Der Kartendienst stellt die Umringe der Digitalen Orthophotos(DOP) 10cm belaubt in Hamburg dar. Mit Hilfe der Umringe ist ein georeferenziertes Suchen der DOPs in der Langzeitspeicherung möglich. Die",
    url: "https://geodienste.hamburg.de/HH_WFS_DKL_DOP10B?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dkl_dop10b_2011",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "bevoelkerungsprognosen-in-hamburg9",
    title: "Bevölkerungsprognosen in Hamburg",
    description: "Prognostizierte jährliche Bevölkerungsentwicklung in den Stadtteilen Hamburgs nach vier Altersgruppen und Geschlecht bis zum Jahr 2035. Stichtag ist jeweils der 31.12. Der Basiszeitpunkt dieser Bevölk",
    url: "https://geodienste.hamburg.de/HH_WFS_Bevoelkerungsprognosen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bevoelkerungsprognosen_bezirk_hh",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "projektdaten-clever-cities-hamburg15",
    title: "Projektdaten CLEVER Cities Hamburg",
    description: "Die Karte zeigt das CLEVER Cities Projektgebiet aus dem EU Förderprogramm Horizon 2020 in Hamburg, Neugraben-Fischbek. Das Projektgebiet erstreckt sich vom Zentrum Neugraben über das Neubaugebiet Voge",
    url: "https://geodienste.hamburg.de/HH_WFS_Clever_Cities?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:active_projects",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "regionaler-bildungsatlas-kennzahlen-zur-schullandschaft-der-sozialraeume-hamburgs12",
    title: "Regionaler Bildungsatlas - Kennzahlen zur Schullandschaft der Sozialräume Hamburgs",
    description: "Beinhaltet die aktuellen Daten und die Daten im Zeitverlauf zu den Hamburger Sozialräumen. Die enthaltenen Datensätze sind durch Bullet Points gekennzeichnet. In Klammern findet sich die Variablenben",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Schul_Sozialraum?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:regionaler_bildungsatlas_schullandschaft_sozialraeume",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["bildung", "sozial"]
  },
  {
    id: "verlegung-wilhelmsburger-reichsstrasse-hamburg18",
    title: "Verlegung Wilhelmsburger Reichsstraße Hamburg",
    description: "Diese Karte stellt den geplanten Verlauf der verlegten Wilhelmsburger Reichsstraße B4/75 dar. Grundlage ist die Planung der DEGES zum Planfeststellungsbeschluss für die Verlegung der Bundesstraße B 4/",
    url: "https://geodienste.hamburg.de/HH_WFS_Geplanter_Verlauf_Wilhelmsburger_Reichsstrasse?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "kreisverkehre-hamburg9",
    title: "Kreisverkehre Hamburg",
    description: "Der Datensatz enthält die Standorte aller Kreisverkehre in Hamburg mit Zusatzattributen, wie Bezeichnung der angeschlossenen Straßen, Art, Außendurchmesser, Befahrbarkeit und Gestaltung. Quelle ist di",
    url: "https://geodienste.hamburg.de/HH_WFS_Kreisverkehre?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:kreisverkehre",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["verkehr"]
  },
  {
    id: "freilaufmoeglichkeiten-fuer-gepruefte-hunde-nach-9-hamburger-hundeg12",
    title: "Freilaufmöglichkeiten für geprüfte Hunde nach § 9 Hamburger HundeG",
    description: "Dieser Datensatz enthält die Freilaufmöglichkeiten für geprüfte Hunde nur auf Wegen, Pfaden und Rasenflächen in öffentlichen Grün- und Erholungsanlagen gemäß § 9 Absatz 3 Hamburger Hundegesetz in der",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_Hundeauslaufzonen_Paragraf_9?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:hundeauslaufzonen_paragraf_9",
    organization: "Bezirksämter",
    keywords: ["grün"]
  },
  {
    id: "heiratsorte-eimsbuettel-hamburg12",
    title: "Heiratsorte Eimsbüttel Hamburg",
    description: "Adress- und Kontaktdaten von Veranstaltungsräumen im Bezirk Eimsbüttel für Eheschließungen außerhalb des Bezirksamtes.",
    url: "https://geodienste.hamburg.de/HH_WFS_Heiratsorte_Eimsbuettel?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:heiratsorte",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "evakuierungsgebiete-sturmflutgefaehrdete-bereiche-hamburgs11",
    title: "Evakuierungsgebiete sturmflutgefährdete Bereiche Hamburgs",
    description: "In diesem Geo-Datensatz werden die Evakuierungsgebiete hinsichtlich sturmflutgefährdeter Bereiche innerhalb des hamburgischen Stadtgebietes dargestellt. Dabei werden die Evakuierungsgebiete ab 6,50m ü",
    url: "https://geodienste.hamburg.de/HH_WFS_Evakuierungsgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "",
    keywords: []
  },
  {
    id: "autobahnkilometrierung-hamburg18",
    title: "Autobahnkilometrierung Hamburg",
    description: "Dieser Datensatz enthält die Kilometrierung der Autobahnen auf dem Gebiet der FHH in 500m-Abschnitten sowie an allen Knotenpunkten der Hamburger Straßeninformationsbank. Er hat das Autobahnverzeichnis",
    url: "https://geodienste.hamburg.de/HH_WFS_Autobahnkilometrierung?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:Autobahnkilometrierung",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["bahn"]
  },
  {
    id: "rettungspunkte-in-hamburger-waldgebieten16",
    title: "Rettungspunkte in Hamburger Waldgebieten",
    description: "Forstliche Rettungspunkte sind markierte Punkte im Wald, die mit einer eindeutigen Nummer versehen sind. Sie erleichtern den Rettungskräften über eine in der Rettungsleitstelle hinterlegte Anfahrtsbes",
    url: "https://geodienste.hamburg.de/HH_WFS_Rettungspunkte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:rettungspunkte",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "projektdaten-clever-cities-hamburg-biotopkartierung-regenrueckhaltebecken-an-de-geest5",
    title: "Projektdaten CLEVER Cities Hamburg - Biotopkartierung Regenrückhaltebecken An de Geest",
    description: "Die Karte zeigt eine Biotoptypenkartierung nach Biotoptypenschlüssel Hamburg (2019) für das Regenrückhaltebecken ‚An de Geest‘ in Neugraben-Fischbek. Die Kartierung erfolgte im Februar 2021. Sie ist T",
    url: "https://geodienste.hamburg.de/HH_WFS_Clever_Cities_Biotopkartierung_RRB?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:rrb_biotoptypen",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "soll-belastungsklassen-strassenoberbau-hamburg8",
    title: "Soll-Belastungsklassen Straßenoberbau Hamburg",
    description: "Der Datensatz enthält die Soll-Belastungsklassen des Straßenoberbaus für das Hamburger Stadtstraßennetz. Die dimensionierungsrelevante Beanspruchung B (Summe der gewichteten äquivalenten 10-t -Achsü",
    url: "https://geodienste.hamburg.de/HH_WFS_Belastungsklasse_Soll?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:belastungsklasse_soll",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "schwermetalldaten-hamburger-suedosten13",
    title: "Schwermetalldaten Hamburger Südosten",
    description: "Der Untersuchungsraum liegt in einem Gebiet, das nachweisbar von der vorhandenen Industrie beeinflusst wurde und wird. Insbesondere in der Vergangenheit gelangten u.a. Schwermetalle über den Luftpfad",
    url: "https://geodienste.hamburg.de/HH_WFS_Schwermetallmessungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bis_f_hhso_sm_raster_500",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "gewaesser-ii-eimsbuettel-hamburg3",
    title: "Gewässer II Eimsbüttel Hamburg",
    description: "Der Datensatz zeigt den Verlauf der Gewässer zweiter Ordnung im Bezirk Eimsbüttel. Neben Kanälen sind Flüsse und Gräben bis hin zu kleinen Bächen verortet. Deren jeweilige Bezeichnung kann im Datensat",
    url: "https://geodienste.hamburg.de/wfs_gewaesser_2_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "forstflurstuecke-eimsbuettel-hamburg3",
    title: "Forstflurstücke Eimsbüttel Hamburg",
    description: "Dieser Datensatz enthält die Forstflurstücke des Bezirks Eimsbüttel und zeigt deren Fläche in Hektar an. Die Forstflurstücke sind nicht verpachtet und damit im alleinigen Besitz des Bezirks (Forst). D",
    url: "https://geodienste.hamburg.de/wfs_forstflurstuecke_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "standorte-des-strassenwetterinformationssystems-swis-hamburg22",
    title: "Standorte des Straßenwetterinformationssystems SWIS Hamburg",
    description: "Dieser Datensatz enthält die Standorte der von der Freien und Hansestadt Hamburg betriebenen Sensoren des Straßenwetterinformationssystems SWIS.",
    url: "https://geodienste.hamburg.de/DE_HH_INSPIRE_WFS_SWIS_Sensoren?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "uebernahme-der-wegebaulast-hamburg13",
    title: "Übernahme der Wegebaulast Hamburg",
    description: "Der Datensatz enthält für jede Straße das Datum der Übernahme in die Baulast der Freien und Hansestadt Hamburg, erfasst nach den zur Zeit der Übernahme geltenden gesetzlichen Regelungen. Enthalten si",
    url: "https://geodienste.hamburg.de/HH_WFS_uebernahme_wegebaulast?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:uebernahme_wegebaulast",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "fahrradhaeuschen-hamburg4",
    title: "Fahrradhäuschen Hamburg",
    description: "Der Datensatz enthält eine Übersicht über alle sogenannten Fahrradhäuschen in Hamburg. Grundlage des Datensatzes sind von den jeweiligen Bezirken bereitgestellte Adressdaten, die nachträglich geocodie",
    url: "https://geodienste.hamburg.de/HH_WFS_Fahrradhaeuschen?SERVICE=WFS&VERSION=1.1.0&REQUEST=DescribeFeatureType&typename=de.hh.up:fahrradhaeuschen",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "fahrrad"]
  },
  {
    id: "widmungen-gemaess-hamburgischem-wegegesetz11",
    title: "Widmungen gemäß Hamburgischem Wegegesetz",
    description: "Der Datensatz enthält Angaben zu den nach Hamburgischem Wegegesetz (HWG) gewidmeten Straßen und Wegen auf dem Gebiet der Freien und Hansestadt Hamburg und zu den nach Bundesfernstraßengesetz gewidmete",
    url: "https://geodienste.hamburg.de/HH_WFS_Widmungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:widmung_flaeche",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "strassenquerschnittsflaechen-sib-hamburg12",
    title: "Straßenquerschnittsflächen SIB Hamburg",
    description: "Der Dienst Straßenquerschnittsflächen SIB Hamburg stellt die in der Hamburger Straßeninformationsbank (HH-SIB) gehaltenen Straßenquerschnittsflächen dar. Hierbei wird unterschieden zwischen der Art de",
    url: "https://geodienste.hamburg.de/HH_WFS_Querschnitte?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "rueckhaltebecken-eimsbuettel-hamburg3",
    title: "Rückhaltebecken Eimsbüttel Hamburg",
    description: "In diesem Datensatz sind die Rückhaltebecken des Bezirksamts Eimsbüttel visualisiert. Durch Klick auf ein Becken wird der jeweilige Name des Beckens sowie der Name des Flusses, der von und zum Becken",
    url: "https://geodienste.hamburg.de/wfs_rueckhaltebecken_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "netzstationen-eimsbuettel-hamburg3",
    title: "Netzstationen Eimsbüttel Hamburg",
    description: "In diesem Datensatz sind die Standorte der Netzstationen im Bezirk Eimsbüttel zu sehen. Die Netzstationen - auch als Trafostation oder Stromverteilerkasten bekannt - sind auf den Flächen der Tiefbau-",
    url: "https://geodienste.hamburg.de/wfs_netzstationen_eimsbuettel?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: ["strom"]
  },
  {
    id: "strassengraeben-eimsbuettel-hamburg4",
    title: "Straßengräben Eimsbüttel Hamburg",
    description: "Die in diesem Datensatz ersichtlichen Straßengräben im Bezirk Eimsbüttel sind durch das Fachamt Management des öffentlichen Raumes erhoben worden. Neben Hinweisen zur Fläche in Quadratmetern oder zum",
    url: "https://geodienste.hamburg.de/wfs_strassengraeben_eimsbuettel?Service=WFS&REQUEST=GetCapabilities",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "stoerfallbetriebe-hamburg13",
    title: "Störfallbetriebe Hamburg",
    description: "Standorte der Betriebsbereiche nach §3 Abs. 5a BImSchG (sogenannte Störfallbetriebe) im Gebiet der Freien und Hansestadt Hamburg.",
    url: "https://geodienste.hamburg.de/HH_WFS_Stoerfallbetriebe?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "schulstammdaten-und-schuelerzahlen-der-hamburger-schulen14",
    title: "Schulstammdaten und Schülerzahlen der Hamburger Schulen",
    description: "Für jede Schule und ggf. ihre Zweigstellen werden dargestellt: - Adresse (Straße, Hausnummer, PLZ, Ort, Geoposition) - Kontaktdaten (Telefon, E-Mail-Funktionspostfach, Fax, Homepage) - Schulmerkmale",
    url: "https://geodienste.hamburg.de/HH_WFS_Schulen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:hh_schulen_eingaenge",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["schule"]
  },
  {
    id: "entwicklung-der-empfaengerzahlen-in-hamburg-nach-2-3-asylblg12",
    title: "Entwicklung der Empfängerzahlen in Hamburg nach §§2, 3 AsylbLG",
    description: "Anzahl der Personen, die in einem Monat laufende Leistungen in Hamburg nach dem Asylbewerberleistungsgesetz §§ 2 oder 3 tatsächlich erhalten haben. Für die Leistungsempfänger nach Personenkreis § 2 As",
    url: "https://geodienste.hamburg.de/HH_WFS_Empfaengerzahlen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:anzahl_personen_mit_leistungen_asylblg_gesamt",
    organization: "Behörde für Arbeit, Gesundheit, Soziales, Familie und Integration",
    keywords: []
  },
  {
    id: "ramsargebiete-in-hamburg26",
    title: "Ramsargebiete in Hamburg",
    description: "Die Schutzgebietsgrenzen der Ramsargebiete werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt. Ramsar-Gebiete sind nach der Ramsar-Konvention von 1971 geschützte Feuchtg",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "bundesstrassen-bundeswasserstrassen-hamburg6",
    title: "Bundesstraßen Bundeswasserstraßen Hamburg",
    description: "Flurstücke, für die im amtlichen Liegenschaftskataster (ALKIS) als Eigentümer die Bundesstraßenverwaltung, die Bundesfernstraßenverwaltung, bzw. die Bundeswasserstraßenverwaltung geführt sind.",
    url: "https://geodienste.hamburg.de/HH_WFS_Bundesstrassen_Bundeswasserstrassen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bund_010_bundesstrassenverwaltung",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["wasser"]
  },
  {
    id: "hamburg-electric-autonomous-transportation-heat16",
    title: "Hamburg Electric Autonomous Transportation (HEAT)",
    description: "Der Datensatz enthält den Verlauf der Strecke für das Projekt Hamburg Electric Autonomous Transportation (HEAT) in der Hafencity in Hamburg.",
    url: "https://geodienste.hamburg.de/HH_WFS_autonomes_Fahren?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:autonomes_fahren_heat1,de.hh.up:autonomes_fahren_heat2",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["transport", "hafen", "port"]
  },
  {
    id: "uebersicht-bildmittelpunkte-datenklasse-lubi10-langzeitspeicherung-hamburg11",
    title: "Übersicht Bildmittelpunkte Datenklasse LUBI10 Langzeitspeicherung Hamburg",
    description: "Der Kartendienst stellt die Bildmittelpunkte der Digitalen Luftbilder(LUBI) 10cm unbelaubt in Hamburg dar. Mit Hilfe der Bildmittelpunkte ist ein georeferenziertes Suchen der LUBIs in der Langzeitspe",
    url: "https://qs-geodienste.hamburg.de/HH_WFS_DKL_LUBI10?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:dkl_lubi10_2010",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "biotopverbund-der-waldlebensraeume-nicht-abgestimmte-fachgrundlage-hamburg3",
    title: "Biotopverbund der Waldlebensräume – nicht abgestimmte Fachgrundlage – Hamburg",
    description: "Im Rahmen der fachlichen Untersuchungen zum Biotopverbund in Hamburg wurde 2012 eine gesonderte Biotopverbunddarstellung für die Waldlebensräume entwickelt. Hier werden für die Waldlebensräume die Ker",
    url: "https://geodienste.hamburg.de/wfs_biotopverbund_waldlebensraeume?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "solarpotenzialflaechen-hamburg4",
    title: "Solarpotenzialflächen Hamburg",
    description: "Dieser Datensatz bildet die ausgewerteten Solarpotenzialflächen ab. Diese Daten sind hinsichtlich ihrer Eignung für Photovoltaikanlagen klassifiziert und werden gemäß der Eignungsklasse farbig differe",
    url: "https://geodienste.hamburg.de/wfs_solarpotenzialanalyse?Service=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "hochschulen-und-forschungseinrichtungen-hamburg13",
    title: "Hochschulen und Forschungseinrichtungen Hamburg",
    description: "Öffentliche und private Hochschulen und Forschungseinrichtungen in Hamburg mit Hauptstandort, Anschrift und Kontaktdaten.",
    url: "https://geodienste.hamburg.de/HH_WFS_hochschulen_forschungseinrichtungen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:hochschulen",
    organization: "Zentrum für nachhaltiges Forschungsdatenmanagement",
    keywords: ["schule"]
  },
  {
    id: "biotopverbund-gesamtdarstellung-nicht-abgestimmte-fachgrundlage-hamburg3",
    title: "Biotopverbund Gesamtdarstellung - nicht abgestimmte Fachgrundlage - Hamburg",
    description: "In der Gesamtdarstellung werden die Inhalte der Einzeldarstellungen der \"Fachgrundlage Biotopverbund\" von 2012 im Überblick dargestellt. Dabei werden für die Gewässer-, Trocken-, Feucht- und Wald...",
    url: "https://geodienste.hamburg.de/wfs_biotopverbund_gesamtdarstellung?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "feuerungsanlagen-nach-44-bimschv-hamburg4",
    title: "Feuerungsanlagen nach 44. BImSchV Hamburg",
    description: "Einzelfeuerungen im Anwendungsbereich der 44. BImSchV (mittelgroße Feuerungsanlagen z.B. Heizkessel, Gasturbinen- und Verbrennungsmotoranlagen), die eine Feuerungswärmeleistung von gleich oder mehr al",
    url: "https://geodienste.hamburg.de/wfs_feuerungsanlagen_44_bimschv?Service=WFS&Version=1.1.0&Request=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "wasserrettungspunkte-hamburg8",
    title: "Wasserrettungspunkte Hamburg",
    description: "Ein Projekt der Deutschen Lebens-Rettungs-Gesellschaft Landesverband Hamburg e.V. in Zusammenarbeit mit der Hamburg Port Authority (HPA) und der Feuerwehr Hamburg zur Erhöhung der Wassersicherheit an",
    url: "https://geodienste.hamburg.de/HH_WFS_Wasserrettungspunkte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:wasserrettungspunkte",
    organization: "Deutsche Lebens-Rettungs-Gesellschaft DLRG Landesverband Hamburg e.V.",
    keywords: ["wasser", "port"]
  },
  {
    id: "schutzgebiet-nationalpark-hamburgisches-wattenmeer28",
    title: "Schutzgebiet Nationalpark Hamburgisches Wattenmeer",
    description: "Die Schutzgebietsgrenzen des Nationalparks werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt. Der Nationalpark Hamburgisches Wattenmeer ist mit seinen 13.750 Hektar der k",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["park"]
  },
  {
    id: "integrierte-stadtteilentwicklung-projekte-in-aktuellen-und-ehemaligen-rise-foerdergebieten-in-h13",
    title: "Integrierte Stadtteilentwicklung - Projekte in aktuellen und ehemaligen RISE-Fördergebieten in Hamburg",
    description: "Die Integrierte Stadtteilentwicklung trägt mit dem Rahmenprogramm Integrierte Stadtteilentwicklung (RISE) dazu bei, Hamburg als gerechte und lebenswerte Stadt weiterzuentwickeln. In den Fördergebieten",
    url: "https://geodienste.hamburg.de/HH_WFS_RISE_Projekte?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:foerdergebiet_neuwiedenthal",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "busoptimierung-metrobuslinien-hamburg11",
    title: "Busoptimierung Metrobuslinien Hamburg",
    description: "Ausbauziel A (ab 2012) Umfassende Maßnahmen zur Verstetigung der genannten MetroBus-Linien im gesamten Linienverlauf durch Optimierung der Ampelschaltungen, Umbau von Kreuzungen und Einrichtung von we",
    url: "https://geodienste.hamburg.de/HH_WFS_busbeschleunigung_Metrobus?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Straßen, Brücken und Gewässer",
    keywords: []
  },
  {
    id: "biotopverbund-der-gewaesserlebensraeume-nicht-abgestimmte-fachgrundlage-hamburg3",
    title: "Biotopverbund der Gewässerlebensräume – nicht abgestimmte Fachgrundlage – Hamburg",
    description: "Im Rahmen der fachlichen Untersuchungen zum Biotopverbund in Hamburg wurde 2012 eine gesonderte Biotopverbunddarstellung für die Gewässerlebensräume entwickelt. Hier werden für die Gewässerlebensräume",
    url: "https://geodienste.hamburg.de/wfs_biotopverbund_gewaesserlebensraeume?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "fauna-flora-habitat-gebiete-in-hamburg25",
    title: "Fauna-Flora-Habitat-Gebiete in Hamburg",
    description: "Die Schutzgebietsgrenzen der Fauna-Flora-Habitat-Gebiete werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "biotopverbund-der-trockenlebensraeume-nicht-abgestimmte-fachgrundlage-hamburg3",
    title: "Biotopverbund der Trockenlebensräume – nicht abgestimmte Fachgrundlage – Hamburg",
    description: "Im Rahmen der fachlichen Untersuchungen zum Biotopverbund in Hamburg wurde 2012 eine gesonderte Biotopverbunddarstellung für die Trockenlebensräume entwickelt. Hier werden für die Trockenlebensräume d",
    url: "https://geodienste.hamburg.de/wfs_biotopverbund_trockenlebensraeume?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "projektdaten-mysmartlife18",
    title: "Projektdaten mySMARTLife",
    description: "Geodaten des EU Horizon 2020 Projektes mySMARTLife. Geodata of the EU Horizon 2020 project mySMARTLife.",
    url: "https://geodienste.hamburg.de/HH_WFS_MySmartLife?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:msl_high_performance_area",
    organization: "Bezirksämter",
    keywords: []
  },
  {
    id: "angebote-und-nutzung-der-jugendmusikschulen-hamburg10",
    title: "Angebote und Nutzung der Jugendmusikschulen Hamburg",
    description: "Kennzahlen zu Angeboten der Jugendmusikschulen: • Schulname • Standort • Unterrichtstyp (Unterscheidung von gebührenpflichtigen Jugendmusikschulangeboten, in denen auch die, Kooperationen mit Schulen",
    url: "https://geodienste.hamburg.de/HH_WFS_Angebote_und_Nutzung_der_Jugendmusikschulen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:jugendmusikschulen_standorte",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["schule"]
  },
  {
    id: "regionaler-bildungsatlas-einzugsgebiete-und-schulwahl-am-wohnort-der-schulen-hamburgs12",
    title: "Regionaler Bildungsatlas - Einzugsgebiete und Schulwahl am Wohnort der Schulen Hamburgs",
    description: "Einzugsgebiete: Dargestellt wird der Wohnort nach Statistischen Gebiet der Schülerinnen und Schüler je Schule. Schulwahl am Wohnort: Dargestellt sind Schulen, die von Schülerinnen und Schülern eines",
    url: "https://geodienste.hamburg.de/HH_WFS_Regionaler_Bildungsatlas_Einzugsgebiete_Schulwahl?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:einzug_einzugsgebiete_primarstufe",
    organization: "Behörde für Schule und Berufsbildung",
    keywords: ["schule", "bildung"]
  },
  {
    id: "bundesflaechen-hamburg7",
    title: "Bundesflächen Hamburg",
    description: "Flächen, für die im amtlichen Liegenschaftskataster als Eigentümer diese Einträge erfasst sind: Bundesrepublik Deutschland (Bundeseisenbahnvermögen), Deutsche Bahn AG, DB Netz AG, DB Fernverkehr AG, D",
    url: "https://geodienste.hamburg.de/HH_WFS_Bundesflaechen?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:bund_030_deutsche_bahn_ag",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["verkehr", "bahn"]
  },
  {
    id: "landschaftsschutzgebiete-in-hamburg26",
    title: "Landschaftsschutzgebiete in Hamburg",
    description: "Die Schutzgebietsgrenzen der Landschaftsschutzgebiete werden als Vektorkoordinaten gemäß Koordinatensystem EPSG::25832 bereitgestellt. Unter Landschaftsschutz werden charakteristische Landschaften mit",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzgebiete?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:nr_f_landschaftsschutzgebiet",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "elektrobusdisposition-hamburg11",
    title: "Elektrobusdisposition Hamburg",
    description: "Analyseergebnisse basierend u. A. auf Daten des Hamburger Luftmessnetzes zur Elektrobusdispostion Hamburg. Es werden Informationen zur Linien-Priorisierung für die Disposition von Elektrobussen in Ha",
    url: "https://geodienste.hamburg.de/HH_WFS_elektrobusdisposition?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:linienranking",
    organization: "Verkehrsbetriebe Hamburg-Holstein GmbH",
    keywords: []
  },
  {
    id: "eventlotse-daten-hamburg15",
    title: "Eventlotse Daten Hamburg",
    description: "Der Datensatz beinhaltet die Flächen der Stadt, die von der Hamburg Convention Bureau GmbH als mögliche Flächen für Veranstaltungen verwaltet werden. Neben der Geometrie der Flächen sind diverse Attri",
    url: "https://geodienste.hamburg.de/HH_WFS_Eventlotse?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=app:hamburgconvention",
    organization: "Hamburg Convention Bureau GmbH",
    keywords: []
  },
  {
    id: "niederschlagsentwaesserungs-informationssystem-newis-teilnetz-fhh-hamburg16",
    title: "Niederschlagsentwässerungs-Informationssystem (NEwIS - Teilnetz FHH) Hamburg",
    description: "Das Niederschlagsentwässerungs-Informationssystem (NEwIS) enthält Entwässerungsnetzdaten von Hamburg und setzt sich aus einem Datensatz der Freien und Hansestadt Hamburg (FHH) und einem Datensatz von",
    url: "https://geodienste.hamburg.de/HH_WFS_NEWIS_Teilnetz_FHH?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "hamburger-finanzamtsbezirke4",
    title: "Hamburger Finanzamtsbezirke",
    description: "Finanzamtsbezirke der Stadt Hamburg",
    url: "https://geodienste.hamburg.de/HH_WFS_Finanzamtbezirke?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "busfahrstreifen-hamburg2",
    title: "Busfahrstreifen Hamburg",
    description: "Der Datensatz enthält alle Busfahrstreifen (oder auch Bussonderstreifen/Busspuren) sowie Kommunaltrassen im Hamburger Stadtgebiet. Angegeben ist neben der Straße, in dem sich der Busfahrstreifen oder",
    url: "https://geodienste.hamburg.de/wfs_hh_busfahrstreifen?Service=WFS&Version=1.1.0&Request=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: []
  },
  {
    id: "naturraeume-geest-und-marsch13",
    title: "Naturräume Geest und Marsch",
    description: "Die Zuordnung des Hamburger Stadtgebietes zu den Naturräumen Geest und Marsch wird dargestellt. Die Karte ist auch als Hilfskarte für den Kontext -Einbau Ersatzbaustoffe- zu verstehen. Hier gibt es un",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?service=WFS&request=DescribeFeatureType&version=1.1.0&typename=de.hh.up:u12_f_naturraum_geest_marsch",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "einbau-ersatzbaustoffe26",
    title: "Einbau Ersatzbaustoffe",
    description: "Anforderungen an die stoffliche Verwertung von mineralischen Abfällen: Karte zur Beurteilung der Einbaufähigkeit von Ersatzbaustoffen unter Berücksichtigung der Grundwasserflurabstände, Überschwemmung",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "einbau-ersatzbaustoffe-hamburg1",
    title: "Einbau Ersatzbaustoffe Hamburg",
    description: "Anforderungen an die stoffliche Verwertung von mineralischen Abfällen: Karte zur Beurteilung der Einbaufähigkeit von Ersatzbaustoffen unter Berücksichtigung der Grundwasserflurabstände und der Decksc",
    url: "https://geodienste.hamburg.de/wfs_einbau_ersatzbaustoffe?Service=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "park-ride-anlagen-hamburg25",
    title: "Park + Ride Anlagen Hamburg",
    description: "Der Datensatz enthält die Park + Ride Anlagen an Schnellbahnstationen im Hamburger Stadtgebiet mit Informationen u.a. über die Lage, die Anzahl der Stellplätze und die Anzahl von Behinderten- und Frau",
    url: "https://geodienste.hamburg.de/HH_WFS_P_und_R?SERVICE=WFS&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["park", "bahn"]
  },
  {
    id: "radverkehrsmengen-stadtradeln-hamburg5",
    title: "Radverkehrsmengen (Stadtradeln) Hamburg",
    description: "Dieser Datensatz enthält die Radverkehrsmengen, die im Rahmen der Kampagne \"Stadtradeln\" des Klima-Bündnis e.V. durch Nutzende der Stadtradeln-App im Stadtgebiet Hamburg in den Jahren 2018 bis 20...",
    url: "https://geodienste.hamburg.de/HH_WFS_Stadtradeln?SERVICE=WFS&Request=GetCapabilities",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM)",
    keywords: ["rad", "verkehr", "klima"]
  },
  {
    id: "flachennutzungsplan-hamburg23",
    title: "Flächennutzungsplan Hamburg",
    description: "Im Flächennutzungsplan wird die sich aus der beabsichtigten städtebaulichen Entwicklung ergebende Art der Bodennutzung nach den voraussehbaren Bedürfnissen der Stadt Hamburg dargestellt (Baugesetzbuch",
    url: "https://geodienste.hamburg.de/HH_WFS_FNP?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "flachennutzungsplan-hamburg22",
    title: "Flächennutzungsplan Hamburg",
    description: "Im Flächennutzungsplan wird die sich aus der beabsichtigten städtebaulichen Entwicklung ergebende Art der Bodennutzung nach den voraussehbaren Bedürfnissen der Stadt Hamburg dargestellt (Baugesetzbuch",
    url: "https://geodienste.hamburg.de/HH_WFS_FNP?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "flachennutzungsplan-hamburg21",
    title: "Flächennutzungsplan Hamburg",
    description: "Im Flächennutzungsplan wird die sich aus der beabsichtigten städtebaulichen Entwicklung ergebende Art der Bodennutzung nach den voraussehbaren Bedürfnissen der Stadt Hamburg dargestellt (Baugesetzbuch",
    url: "https://geodienste.hamburg.de/HH_WFS_FNP?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "flachennutzungsplan-hamburg16",
    title: "Flächennutzungsplan Hamburg",
    description: "Im Flächennutzungsplan wird die sich aus der beabsichtigten städtebaulichen Entwicklung ergebende Art der Bodennutzung nach den voraussehbaren Bedürfnissen der Stadt Hamburg dargestellt (Baugesetzbuch",
    url: "https://geodienste.hamburg.de/HH_WFS_FNP?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "flaechennutzungsplan-hamburg-anderungsuebersicht",
    title: "Flächennutzungsplan Hamburg - Änderungsübersicht",
    description: "Die Änderungsübersicht für den Flächennutzungsplan Hamburg zeigt die Bereiche, in denen seit der Neubekanntmachung dieses Plans im Oktober 1997 Änderungen festgestellt, Berichtigungen gemäß §13 a BauG",
    url: "https://geodienste.hamburg.de/HH_WFS_FNP_Aend?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "flachennutzungsplan-hamburg-anderungsubersicht11",
    title: "Flächennutzungsplan Hamburg - Änderungsübersicht",
    description: "Die Änderungsübersicht für den Flächennutzungsplan Hamburg zeigt die Bereiche, in denen seit der Neubekanntmachung dieses Plans im Oktober 1997 Änderungen festgestellt, Berichtigungen gemäß §13 a BauG",
    url: "https://geodienste.hamburg.de/HH_WFS_FNP_Aend?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW)",
    keywords: []
  },
  {
    id: "hamburger-hauptdeichlinie15",
    title: "Hamburger Hauptdeichlinie",
    description: "Dargestellt wird die Hauptdeichlinie innerhalb des hamburgischen Stadtgebietes. Die Daten stammen dabei aus der DK5.",
    url: "https://geodienste.hamburg.de/HH_WFS_Hauptdeichlinien?SERVICE=WFS&REQUEST=GetCapabilities",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: []
  },
  {
    id: "velo-und-freizeitrouten-hamburg6",
    title: "Velo- und Freizeitrouten Hamburg",
    description: "Hamburg verfügt über ein Netz von 14 Velorouten für den Alltagsradverkehr (ca. 280 km) und 14 Freizeitrouten für das Radwandern (ca. 440 km). Außerdem verlaufen 5 Radfernwege durch Hamburg. Die Veloro",
    url: "https://geodienste.hamburg.de/HH_WFS_Fahrradrouten?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation, Amt für Verkehr und Straßenwesen",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "verdunstungspotential-boden13",
    title: "Verdunstungspotential Boden",
    description: "Die Verdunstungspotentialkarte wurde im Jahr 2021 durch die Bodenkühlleistungskarte Hamburg abgelöst und vollständig ersetzt. Nach Einführung der Bodenkühlleistungskarte darf die Verdunstungspotential",
    url: "https://geodienste.hamburg.de/HH_WFS_VerdunstPot?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: []
  },
  {
    id: "grundwassergleichen-max-20181",
    title: "Grundwassergleichen Max 2018",
    description: "Grundwassergleichen in Meter NHN des hydrologischen Jahres 2018 (maximale/höchste Grundwasserstände im 1. Hauptgrundwasserleiter). Die Daten werden als WMS-Darstellungsdienst und als WFS-Downloaddiens",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "grundwassergleichen-min-2019",
    title: "Grundwassergleichen Min 2019",
    description: "Grundwassergleichen in Meter NHN des hydrologischen Jahres 2019 (minimale/niedrige Grundwasserstände im 1. Hauptgrundwasserleiter). Die Daten werden als WMS-Darstellungsdienst und als WFS-Downloaddien",
    url: "https://geodienste.hamburg.de/HH_WFS_Grundwasserschutz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt, Klima, Energie und Agrarwirtschaft (BUKEA)",
    keywords: ["wasser"]
  },
  {
    id: "verkehrsdaten-rad-infrarotdetektoren-hamburg",
    title: "Verkehrsdaten Rad (Infrarotdetektoren) Hamburg",
    description: "Allgemeine Informationen: Der Datensatz umfasst Verkehrsdaten aller Standorte in Hamburg, an denen der Radverkehr mittels Infrarotdetektoren an 24h am Tag und allen Tagen des Jahres erfasst wird. D",
    url: "https://geodienste.hamburg.de/HH_WFS_Harazaen?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Verkehr und Mobilitätswende (BVM), Amt Verkehr",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "wahlergebnisse-zu-stadtteilen5",
    title: "Wahlergebnisse zu Stadtteilen",
    description: "Wahlergebnisse zur Bürgerschaftswahl vom 15.02.2015 für die Hamburger Stadtteile. Endgültiges Ergebnis: Listenstimmen Gesamtstimmen (Stimmenanteile der Parteien ohne Berücksichtigung der Briefwahl) (Q",
    url: "https://geodienste.hamburg.de/HH_WFS_Statistik_Stadtteile_Wahlergebnisse?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein, Informationsservice und Bibliothek - Hamburg",
    keywords: []
  },
  {
    id: "artenkataster-tiere-hamburg8",
    title: "Artenkataster Tiere Hamburg",
    description: "Das Artenkataster enthält Fundortdaten zu Tierarten, die z.T. von beauftragten Kartierern, Naturschutzverbänden, Interessengemeinschaften und ehrenamtlich Tätigen erhoben werden. Die veröffentlichten",
    url: "https://geodienste.hamburg.de/HH_WFS_Arten?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE), Amt für Naturschutz, Grünplanung und Energie",
    keywords: []
  },
  {
    id: "geodaten-zu-wahlen-von-hamburg-bundestags-und-burgerschaftswahl7",
    title: "Geodaten zu Wahlen von Hamburg (Bundestags- und Bürgerschaftswahl)",
    description: "Die Hamburger Bundestags- Bürgerschafts- und Bezirksversammlungswahlkreise sind räumlich abgegrenzte Teile des Wahlgebietes der Freie und Hansestadt Hamburg, in denen die Wahlberechtigten jeweils ein",
    url: "https://geodienste.hamburg.de/HH_WFS_Wahlen?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein",
    keywords: []
  },
  {
    id: "geodaten-zu-wahlen-von-schleswig-holstein-bundestags-und-landtagswahl7",
    title: "Geodaten zu Wahlen von Schleswig-Holstein (Bundestags- und Landtagswahl)",
    description: "Die Bundestags- und Landtagswahlkreise von Schleswig-Holstein sind räumlich abgegrenzte Teile des Wahlgebietes des Landes Schleswig-Holstein, in denen die Wahlberechtigten jeweils ein bzw. drei bis fü",
    url: "https://geodienste.hamburg.de/SH_WFS_Wahlen?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Statistisches Amt für Hamburg und Schleswig-Holstein, Informationsservice und Bibliothek - Hamburg",
    keywords: []
  },
  {
    id: "fachplan-schutzwurdige-boden3",
    title: "Fachplan Schutzwürdige Böden",
    description: "Auf Basis eines Fachgutachtens über Bereiche in Hamburg mit Böden hoher Ausprägung der Archiv- und Lebensraumfunktionen werden Gebiete ausgewiesen, die bei Inanspruchnahme durch Stadtplanungsprozesse",
    url: "https://geodienste.hamburg.de/HH_WFS_Schutzboeden?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE), Amt für Umweltschutz",
    keywords: []
  },
  {
    id: "dienststellenstandorte-der-strassenbauverwaltungen-hamburg3",
    title: "Dienststellenstandorte der Straßenbauverwaltungen Hamburg",
    description: "Dieser Datensatz enthält die Dienststellenstandorte der Hamburger Straßenbauverwaltungen, Autobahnmeistereien, sowie Außenstellen der jeweiligen Struktureinheit.",
    url: "https://geodienste.hamburg.de/DE_HH_INSPIRE_WFS_Dienststellenstandorte_SBV?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation",
    keywords: ["bahn"]
  },
  {
    id: "dienststellenstandorte-der-strassenbauverwaltungen-hamburg2",
    title: "Dienststellenstandorte der Straßenbauverwaltungen Hamburg",
    description: "Dieser Datensatz enthält die Dienststellenstandorte der Hamburger Straßenbauverwaltungen, Autobahnmeistereien, sowie Außenstellen der jeweiligen Struktureinheit.",
    url: "https://geodienste.hamburg.de/DE_HH_INSPIRE_WFS_Dienststellenstandorte_SBV?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation",
    keywords: ["bahn"]
  },
  {
    id: "landesgrundbesitzverzeichnis-hamburg5",
    title: "Landesgrundbesitzverzeichnis Hamburg",
    description: "Das Landesgrundbesitzverzeichnis dient der Freien und Hansestadt Hamburg als Nachweis über alle landeseigenen Grundstücke und grundstücksgleichen Rechte. Landeseigener Grundbesitz ist in dem Verzeic",
    url: "https://geodienste.hamburg.de/HH_WFS_LIG_Grundbesitz?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Landesbetrieb Immobilienmanagement und Grundvermögen, Flächen- und Portfoliomanagement (Abteilung 45) Management der Datenbanken und des grafischen Informationssystems (Referat 452)",
    keywords: []
  },
  {
    id: "offentliche-und-soziale-einrichtungen-hamburg9",
    title: "Öffentliche und Soziale Einrichtungen Hamburg",
    description: "Eine Teilmenge des Hamburger Topographischen Informationsmanagements (TIM) ist in diesem Datensatz enthalten. Der LGV nutzt das TIM zusätzlich, um aktuelle Informationen über geplante oder realisierte",
    url: "https://geodienste.hamburg.de/DE_HH_WFS_INSPIRE_A3_6_Versorgungswirtschaft?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Landesbetrieb Geoinformation und Vermessung",
    keywords: ["sozial"]
  },
  {
    id: "online-anliegen-extern4",
    title: "Online-Anliegen - extern",
    description: "Die Online-Anliegen - extern der Bürger und Unternehmen wie z.B. Schlaglöcher oder beschädigte Verkehrslichter werden in einer Datenbank gespeichert und bereitgestellt und im Melde-Michel sichtbar dar",
    url: "http://geodienste.hamburg.de/HH_WFS_MML_extern?SERVICE=WFS&VERSION=1.1.0&REQUEST=GetFeature&typename=MML:anliegen_extern",
    organization: "Finanzbehörde, Organisation und Zentrale Dienste",
    keywords: ["verkehr"]
  },
  {
    id: "bodendenkmaler-hamburg-offentlich-internet2",
    title: "Bodendenkmäler Hamburg öffentlich Internet",
    description: "Kartierung bekannter und veröffentlichter Bodendenkmäler auf dem Gebiet der FHH. Auswahlkriterien: Objekte sind obertägig sichtbar, als Denkmal erkennbar, von touristischem Interesse und unterliegen",
    url: "https://geodienste.hamburg.de/HH_WFS_Denkmal_public?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Archäologisches Museum Hamburg, Bodendenkmalpflege",
    keywords: []
  },
  {
    id: "integrierte-stadtteilentwicklung-rise-fordergebiete-in-hamburg9",
    title: "Integrierte Stadtteilentwicklung - RISE - Fördergebiete in Hamburg",
    description: "Die Karte zeigt die Fördergebiete des Hamburger Rahmenprogramms Integrierte Stadtteilentwicklung (RISE). RISE bildet das programmatische Dach der Städtebauförderung auf der Landesebene. Es umfasst die",
    url: "https://geodienste.hamburg.de/HH_WFS_RISE_FG?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Stadtentwicklung und Wohnen (BSW), Amt für Wohnen, Stadterneuerung und Bodenordnung",
    keywords: []
  },
  {
    id: "positivnetz-lang-lkw-hamburg",
    title: "Positivnetz Lang-LKW Hamburg",
    description: "Der Datensatz beinhaltet den Teil des Hamburger Straßennetzes, der für die Befahrung mit Lang-Lkw freigegeben ist (Positivnetz). In Hamburg beschränkt sich dieses Straßennetz auf die Bundesautobahnen",
    url: "https://geodienste.hamburg.de/HH_WFS_Positivnetz_Feldversuch_LangLKW?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation, Amt für Verkehr und Straßenwesen",
    keywords: ["bahn"]
  },
  {
    id: "tempo-30-zonen-hamburg",
    title: "Tempo-30-Zonen Hamburg",
    description: "Der Datensatz enthält die Tempo-30-Zonen in Hamburg, die durch das Verkehrszeichen Nr. 274.1 (Beginn einer Tempo-30-Zone) bzw. 274.2 (Ende einer Tempo-30-Zone) begrenzt werden.",
    url: "https://geodienste.hamburg.de/HH_WFS_Tempo_30_Zonen?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation, Amt für Verkehr und Straßenwesen",
    keywords: ["verkehr"]
  },
  {
    id: "behindertenstellplatze-hamburg10",
    title: "Behindertenstellplätze Hamburg",
    description: "Die Behindertenstellplätze im Hamburger Stadtgebiet werden angezeigt. Es werden ausschließlich öffentliche Stellplätze ohne personenbezogene Daten ausgewiesen. In der Regel sind die Plätze in der Örtl",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehr_opendata?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Inneres und Sport, Polizei Hamburg",
    keywords: []
  },
  {
    id: "motorradstellplatze-hamburg10",
    title: "Motorradstellplätze Hamburg",
    description: "Die Motrorradstellplätze im Hamburger Stadtgebiet werden angezeigt. In der Regel sind die Plätze in der Örtlichkeit markiert und auch beschildert. Die Verkehrsdirektion erhebt diese Daten und hat sie",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehr_opendata?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Inneres und Sport, Polizei Hamburg",
    keywords: ["rad", "verkehr"]
  },
  {
    id: "reisebusparkplatze-hamburg11",
    title: "Reisebusparkplätze Hamburg",
    description: "Die Reisebusparkplätze im Hamburger Stadtgebiet werden angezeigt. In der Regel sind die Plätze in der Örtlichkeit markiert und auch beschildert. Die Verkehrsdirektion erhebt diese Daten und hat sie i",
    url: "https://geodienste.hamburg.de/HH_WFS_Verkehr_opendata?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Inneres und Sport, Polizei Hamburg",
    keywords: ["park", "verkehr"]
  },
  {
    id: "positivnetz-feldversuch-lang-lkw-hamburg7",
    title: "Positivnetz Feldversuch Lang-LKW Hamburg",
    description: "Die Bundesregierung hat unter Federführung des Bundesministeriums für Verkehr, Bau und Stadtentwicklung (BMVBS) mit Wirkung vom 1. Januar 2012 einen Feldversuch mit sogenannten Lang-Lkw gestartet. De",
    url: "https://geodienste.hamburg.de/HH_WFS_Positivnetz_Feldversuch_LangLKW?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation, Amt für Verkehr und Straßenwesen",
    keywords: ["verkehr"]
  },
  {
    id: "30er-zonen-hamburg2",
    title: "30er Zonen Hamburg",
    description: "Daten zu Tempo-30-Zonen in Hamburg, die durch das Verkehrszeichen Nr. 274.1 (Beginn einer Tempo-30-Zone) bzw. 274.2 (Ende einer Tempo-30-Zone) begrenzt werden.",
    url: "https://geodienste.hamburg.de/HH_WFS_Tempo_30_Zonen?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Wirtschaft, Verkehr und Innovation, Amt für Verkehr und Straßenwesen",
    keywords: ["verkehr"]
  },
  {
    id: "biotopkataster3",
    title: "Biotopkataster",
    description: "Daten und Karten zu Lebensräumen von Pflanzen und Tieren unter besonderer Berücksichtigung der gesetzlich geschützten Biotope. Trotz Plausibilitätsprüfungen kann keine Gewähr auf Vollständigkeit oder",
    url: "https://geodienste.hamburg.de/HH_WFS_Biotopkataster?REQUEST=GetCapabilities&SERVICE=WFS",
    organization: "Behörde für Umwelt und Energie (BUE), Amt für Naturschutz, Grünplanung und Energie",
    keywords: []
  }
];
